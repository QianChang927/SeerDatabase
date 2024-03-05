package com.robot.app2.mapProcess.control
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.StaticObjectControll;
   import com.robot.app2.control.activityHelper.actions.PlayTalksAction;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class StonyEyesSub3Task extends PlotTask
   {
       
      
      private var hasWater:int;
      
      public var showTips:Boolean;
      
      private var curBoss:int;
      
      public function StonyEyesSub3Task(param1:MovieClip)
      {
         super(param1);
      }
      
      override protected function onNpcClick(param1:int) : void
      {
         var npcId:int = param1;
         switch(npcId)
         {
            case 1:
               new PlayTalksAction({
                  "name":"talk",
                  "type":"talks",
                  "value":[[20,"你好，汐汐，请问你知道我该去哪儿寻找隐竹泉水吗？"],[2938,"这可是水竹山脉的特色宝物，每天只能生产3滴！你要它有什么用？","我要救助我的朋友！"],[20,"我的朋友得了眼疾，需要这种泉水来恢复眼睛。","原来如此！"],[2938,"我们可以把泉水给你，但是你猜猜看，泉水在谁身上？","原来还要陪你们玩游戏啊！"]]
               }).doAction().then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43301,[7,1]);
               }).then(this.updateState);
               break;
            case 2:
               new PlayTalksAction({
                  "name":"talk",
                  "type":"talks",
                  "value":[[2938,"我们" + int(3 + this.hasWater) + "人中只有一人带着隐竹泉水，猜猜看，我身上有没有呢？"]]
               }).doAction().then(function():void
               {
                  ModuleManager.showAppModule("StonyEyesFightPanel",2 + curBoss);
               });
               break;
            case 3:
               new PlayTalksAction({
                  "name":"talk",
                  "type":"talks",
                  "value":[[2938,"哈哈，猜错啦！","真讨厌！"]]
               }).doAction();
               break;
            case 4:
               new PlayTalksAction({
                  "name":"talk",
                  "type":"talks",
                  "value":[[2938,"哇，好厉害！那这份隐竹泉水就送给你啦！","谢谢你！"]]
               }).doAction().then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43301,[7,7]);
               }).then(this.updateState);
               break;
            case 5:
               new PlayTalksAction({
                  "name":"talk",
                  "type":"talks",
                  "value":[[2938,"哇，好厉害！那这份隐竹泉水就送给你啦！","谢谢你！"],[2938,"隐竹泉水每天只能生产出3份，我们已经全部给你了哦！快回去吧，祝你的朋友早日康复！","多谢！"]]
               }).doAction().then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43301,[7,7]);
               }).then(function():void
               {
                  ModuleManager.showAppModule("StonyEyesTipsPanel");
               });
         }
      }
      
      override protected function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "close":
               KTool.changeMapWithCallBack(1,function():void
               {
                  ModuleManager.showAppModule("StonyEyesMainPanel");
               });
               break;
            case "npc_" + index:
               this.curBoss = index;
               this.onNpcClick(state == 0 ? 1 : 2);
         }
      }
      
      override protected function updateState() : void
      {
         KTool.getMultiValue([104514,104511],function(param1:Array):void
         {
            var _loc2_:int = 0;
            state = param1[0] >> 8 & 15;
            hasWater = state < 3 ? 0 : (state < 5 ? 1 : (state < 7 ? 2 : 3));
            ui.gotoAndStop(state == 0 ? 1 : hasWater + 2);
            if(!StaticObjectControll.containKey("StonyEyesSub3State"))
            {
               _loc2_ = -1;
            }
            else
            {
               _loc2_ = StaticObjectControll.getObjectByKey("StonyEyesSub3State");
            }
            if(_loc2_ == state && (state == 1 || state == 3 || state == 5))
            {
               onNpcClick(3);
            }
            else if(state == 2 || state == 4 || state == 6)
            {
               onNpcClick(state == 6 ? 5 : 4);
            }
            var _loc3_:int = 1;
            while(_loc3_ <= 5)
            {
               if(KTool.getBit(param1[1],8 + _loc3_) == 1 && (param1[1] >> 4 & 15) != _loc3_ && ui["npc_" + _loc3_] != null)
               {
                  ui["npc_" + _loc3_].visible = false;
                  if(ui["arrow_" + _loc3_])
                  {
                     ui["arrow_" + _loc3_].visible = false;
                  }
               }
               else
               {
                  if(ui["npc_" + _loc3_])
                  {
                     ui["npc_" + _loc3_].visible = true;
                  }
                  if(ui["arrow_" + _loc3_])
                  {
                     ui["arrow_" + _loc3_].visible = true;
                  }
               }
               _loc3_++;
            }
         });
      }
   }
}
