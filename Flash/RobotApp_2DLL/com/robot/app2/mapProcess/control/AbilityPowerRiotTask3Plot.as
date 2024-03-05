package com.robot.app2.mapProcess.control
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.actions.PlayTalksAction;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class AbilityPowerRiotTask3Plot extends PlotTask
   {
       
      
      private var tastStep:int;
      
      public function AbilityPowerRiotTask3Plot(param1:MovieClip)
      {
         super(param1);
         StatManager.sendStat2014("0111奇异的能量深渊","进入采集场景","2019运营活动");
      }
      
      override protected function onNpcClick(param1:int) : void
      {
         var npcId:int = param1;
         switch(npcId)
         {
            case 1:
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[20,"哎呀，好像这里的异能都变弱了！不过这里正好有个萃取机，我还是把它们都萃取一下，再把浓缩液给它喝吧！"]]
               }).doAction().then(function():void
               {
                  ui["arrow_5"].visible = true;
                  CommonUI.setEnabled(ui["btn"],true,false);
                  ui["mc"].gotoAndStop(1);
               });
         }
      }
      
      override protected function onClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var e:MouseEvent = param1;
         index = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "close":
               KTool.changeMapWithCallBack(1,function():void
               {
                  ModuleManager.showAppModule("AbilityPowerRiotSub1Panel");
               });
               break;
            case "btn":
               StatManager.sendStat2014("0111奇异的能量深渊","打开萃取机面板","2019运营活动");
               ModuleManager.showAppModule("AbilityPowerRiotSub3Panel");
               break;
            case "btn_" + index:
               ui.removeEventListener(MouseEvent.CLICK,this.onClick);
               ui["ani_" + index].visible = true;
               AnimateManager.playMcAnimateWithPromis(ui,1,"ani_" + index).then(function():Promise
               {
                  ui["ani_" + index].visible = false;
                  ui.addEventListener(MouseEvent.CLICK,onClick);
                  return SocketConnection.sendWithPromise(43306,[28,index]);
               }).then(this.updateState);
         }
      }
      
      override protected function updateState() : void
      {
         var count:int = 0;
         ui["arrow_5"].visible = false;
         CommonUI.setEnabled(ui["btn"],false,false);
         KTool.getMultiValue([104686],function(param1:Array):void
         {
            var arr:Array = param1;
            count = 0;
            var i:int = 1;
            while(i <= 4)
            {
               ui["ani_" + i].visible = false;
               if(KTool.getBit(arr[0],24 + i))
               {
                  CommonUI.setEnabled(ui["btn_" + i],false,false);
                  ui["arrow_" + i].visible = false;
                  ++count;
               }
               else
               {
                  CommonUI.setEnabled(ui["btn_" + i],true,false);
                  ui["arrow_" + i].visible = true;
               }
               i++;
            }
            ItemManager.updateAndGetItemsNum([1719017],function(param1:Array):void
            {
               if(param1[0] > 0)
               {
                  ui["arrow_5"].visible = false;
                  CommonUI.setEnabled(ui["btn"],false,false);
               }
               else if(count == 4)
               {
                  onNpcClick(1);
                  ui["mc"].gotoAndStop(2);
               }
            });
         });
      }
      
      override public function destroy() : void
      {
         super.destroy();
      }
   }
}
