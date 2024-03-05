package com.robot.app2.mapProcess.control
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.component.TimeCountdownComponent;
   import com.robot.app2.control.StaticObjectControll;
   import com.robot.app2.control.activityHelper.actions.PlayTalksAction;
   import com.robot.app2.mapProcess.MapProcess_11804;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import flash.events.MouseEvent;
   
   public class FinalBattleTask1Plot extends PlotUITask
   {
       
      
      private var bossIds:Array;
      
      private var petIds:Array;
      
      private var npcDialogIds:Array;
      
      private var tcdc:TimeCountdownComponent;
      
      public function FinalBattleTask1Plot()
      {
         super("2019/0201/FinalBattleTask1Plot");
      }
      
      override public function init(param1:* = null) : void
      {
         var i:int;
         var arr:* = param1;
         this.petIds = arr[1];
         this.npcDialogIds = arr[2];
         ui["btn_mc"]["txt_3"].text = "x" + arr[3];
         this.tcdc = new TimeCountdownComponent(ui["btn_mc"]["time"]);
         this.tcdc.initialSeconds = 3600 - SystemTimerManager.sysDate.minutes * 60 - SystemTimerManager.sysDate.seconds;
         this.tcdc.start(function():void
         {
            closeMap();
         });
         ui["btn_mc"]["txt_2"].text = PetXMLInfo.getName(this.petIds[1]);
         i = 1;
         while(i <= 2)
         {
            ui["depth_mc"]["txt_" + i].text = PetXMLInfo.getName(this.petIds[i - 1]);
            getBossSprite(this.petIds[i - 1],ui["depth_mc"]["boss_" + i]);
            i++;
         }
         this.updateState();
      }
      
      override protected function onClick(param1:MouseEvent) : void
      {
         var _loc3_:String = null;
         var _loc2_:int = int(param1.target.name.split("_")[1]);
         switch(param1.target.name)
         {
            case "close":
               closeMap();
               break;
            case "bag":
               PetBagControllerNew.showByBuffer();
               break;
            case "cure":
               PetManager.cureAllFree();
               break;
            case "fight_" + _loc2_:
               FightManager.fightNoMapBoss("",MapProcess_11804.curMapIndex == 1 ? 15199 : 15224);
         }
      }
      
      override protected function onNpcClick(param1:int) : void
      {
         var npcId:int = param1;
         closeEvent();
         switch(npcId)
         {
            case 1:
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[this.npcDialogIds[0],"你终于来了，勇士。快帮帮我，我……快撑不住了。","没问题！"]]
               }).doAction().then(openEvent);
               break;
            case 2:
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[this.npcDialogIds[1],"既然你找来了帮手，此次战斗已经没有了意义。哼，就饶你一条命。","口出狂言，下次要你好看！"]]
               }).doAction().then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43307,[4,(MapProcess_11804.curMapIndex - 1) * 5 + 1]);
               }).then(function():void
               {
                  openEvent();
                  closeMap();
               });
         }
      }
      
      override protected function updateState() : void
      {
         KTool.getMultiValue([10606],function(param1:Array):void
         {
            ui["depth_mc"]["txt_3"].text = param1[0] + "/5000";
            if(param1[0] >= 5000)
            {
               onNpcClick(2);
            }
            else if(StaticObjectControll.getObjectByKey("FinalBattleTask") as int == 0 && param1[0] == 0)
            {
               onNpcClick(1);
               StaticObjectControll.setObjectByKey("FinalBattleTask",1);
            }
         });
      }
      
      override public function destroy() : void
      {
         if(this.tcdc != null)
         {
            this.tcdc.destroy();
            this.tcdc = null;
         }
         super.destroy();
      }
   }
}
