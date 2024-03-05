package com.robot.app2.mapProcess.control
{
   import com.robot.app.control.BonusController;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.component.TimeCountdownComponent;
   import com.robot.app2.control.StaticObjectControll;
   import com.robot.app2.control.activityHelper.actions.PlayTalksAction;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NpcDialogNew_1;
   import flash.events.MouseEvent;
   
   public class FinalBattleTask8Plot extends PlotUITask
   {
       
      
      private var bossIds:Array;
      
      private var petIds:Array;
      
      private var npcDialogIds:Array;
      
      private var tcdc:TimeCountdownComponent;
      
      private var allPetIds:Array;
      
      private var npcIds:Array;
      
      private var subValue:int;
      
      private var lastHurt:int;
      
      public function FinalBattleTask8Plot()
      {
         this.allPetIds = [3785,3773,3767,3791,3794,3797];
         this.npcIds = [3051,3027,3017,3057,3064,3068];
         super("2019/0201/FinalBattleTask8Plot");
      }
      
      override public function init(param1:* = null) : void
      {
         var arr:* = param1;
         this.tcdc = new TimeCountdownComponent(ui["btn_mc"]["time"]);
         this.tcdc.initialSeconds = 3600 - SystemTimerManager.sysDate.minutes * 60 - SystemTimerManager.sysDate.seconds;
         this.tcdc.start(function():void
         {
            closeMap();
         });
         this.updateState();
      }
      
      override protected function onClick(param1:MouseEvent) : void
      {
         var name:String = null;
         var e:MouseEvent = param1;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
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
            case "fight_" + index:
               KTool.getGlobalValues(123,[1],function(param1:Array):void
               {
                  if(param1[0] >= 1000 * 10000)
                  {
                     onNpcClick(5);
                  }
                  else
                  {
                     onNpcClick(2);
                  }
               });
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
                  "value":[[this.npcDialogIds[0],"来吧！来吧！你们的努力一文不值，我会将你们全部杀光！"]]
               }).doAction().then(openEvent);
               break;
            case 2:
               NpcDialogNew_1.show(this.npcDialogIds[0],["魔神们已经节节衰退了，魔界再无希望！放下你们的武器，服从川大人的意志吧！"],["我们绝不放弃！","打扰了"],[function():void
               {
                  KTool.getGlobalValues(10018,[subValue == 1 ? 3 : 4],function(param1:Array):void
                  {
                     var g:Array = param1;
                     if(g[0] == 1)
                     {
                        onNpcClick(5);
                     }
                     else
                     {
                        StaticObjectControll.setObjectByKey("FinalBattleTask8",lastHurt);
                        FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
                        {
                           var e:PetFightEvent = param1;
                           FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                           SocketConnection.sendWithPromise(43307,[7,3]).then(function():void
                           {
                              if(ui != null)
                              {
                                 updateState();
                              }
                           });
                        });
                        SocketConnection.sendWithPromise(43307,[7,2]);
                     }
                  });
               },function():void
               {
               }]);
               break;
            case 3:
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[this.npcDialogIds[0],"哎呀，好像有只蚂蚁正在给我挠痒痒。"]]
               }).doAction().then(function():void
               {
                  BonusController.showDelayBonus(3210);
                  updateState();
               });
               break;
            case 4:
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[this.npcDialogIds[0],"呃啊……你们这些烦人的家伙，我要把你们统统杀光！"]]
               }).doAction().then(function():void
               {
                  BonusController.showDelayBonus(3210);
                  updateState();
               });
               break;
            case 5:
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[this.npcDialogIds[0],"看看你们，卑微而渺小。你们的努力一文不值，这叛逆的一切都将在圣教的怒火下变为废墟！我还有更伟大的事情要做，没空再陪你们玩了！"]]
               }).doAction().then(function():void
               {
                  openEvent();
                  closeMap();
               });
         }
      }
      
      override protected function updateState() : void
      {
         var hurtValue:int = 0;
         BonusController.addDelay(3210);
         this.subValue = SystemTimerManager.sysDate.hours == 13 ? 1 : 2;
         hurtValue = this.subValue == 1 ? 10613 : 10614;
         KTool.getGlobalValues(10018,[this.subValue == 1 ? 7 : 8,this.subValue == 1 ? 3 : 4],function(param1:Array):void
         {
            var g:Array = param1;
            KTool.getMultiValue([hurtValue],function(param1:Array):void
            {
               petIds = [allPetIds[g[0] - 1]];
               npcDialogIds = [npcIds[g[0] - 1]];
               ui["depth_mc"]["txt_1"].text = PetXMLInfo.getName(petIds[0]);
               getBossSprite(petIds[0],ui["depth_mc"]["boss_1"]);
               ui["btn_mc"]["txt_2"].text = PetXMLInfo.getName(petIds[0]);
               if(param1[0] < 5000)
               {
                  ui["btn_mc"]["txt_1"].text = param1[0] + "/5000";
               }
               else
               {
                  ui["btn_mc"]["txt_1"].text = param1[0] + "/20000";
               }
               if(g[1] == 1)
               {
                  onNpcClick(5);
               }
               else if(StaticObjectControll.getObjectByKey("FinalBattleTask") as int == 0)
               {
                  onNpcClick(1);
                  StaticObjectControll.setObjectByKey("FinalBattleTask",1);
               }
               else if(StaticObjectControll.containKey("FinalBattleTask8"))
               {
                  lastHurt = StaticObjectControll.getObjectByKey("FinalBattleTask8");
                  StaticObjectControll.setObjectByKey("FinalBattleTask8",param1[0]);
                  if(param1[0] >= 5000 && lastHurt < 5000)
                  {
                     onNpcClick(3);
                  }
                  else if(lastHurt < 2 * 10000 && param1[0] >= 2 * 10000)
                  {
                     onNpcClick(4);
                  }
                  lastHurt = param1[0];
               }
            });
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
