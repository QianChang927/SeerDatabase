package com.robot.app2.mapProcess.control
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.actions.PlayTalksAction;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   
   public class AbilityPowerRiotTask2Plot extends PlotTask
   {
       
      
      private var taskStep:int;
      
      private var needItem:int;
      
      public function AbilityPowerRiotTask2Plot(param1:MovieClip)
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
                  "name":"talk1",
                  "type":"talks",
                  "value":[[20,"今天你有没有觉得舒服一些？"],[3075,"舒服多了，不过与我体内被抽空的异能相比，还是太少了一些。"],[3075,"非常感谢你的照顾！我想，我还需要" + this.needItem + "份萃取液，就可以恢复行动了！","我来帮你吧！"]]
               }).doAction().then(function():void
               {
                  SocketConnection.sendWithPromise(43306,[29,1]);
               }).then(this.updateState);
               break;
            case 2:
               SocketConnection.sendWithPromise(43306,[29,2]).then(function():Promise
               {
                  return new PlayTalksAction({
                     "name":"talk1",
                     "type":"talks",
                     "value":[[20,"它看起来好像恢复了一些，不过这里的异能能量消失的太多，即使是萃取液也不能让它快速恢复活力。还是再找一些萃取液来吧！"]]
                  }).doAction();
               }).then(this.updateState);
               break;
            case 3:
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[3075,"谢谢你，我想我已经有了足够的力气，可以自由行动了！"],[20,"真是太棒了！接下来你有什么打算吗？"],[3075,"我已经不是当年那个杰里了，我的异能全部消失，我的同族、甚至这个星球上的人，都已经消失在了那股奇异的力量中。"],[3075,"我想重新开始我的生活，从今天起，你可以叫我杰内。","好"],[3075,"听说如今宇宙内纷争不断，你能带我见识一下这个大千世界吗？","可是这可能会很危险。"],[3075,"我的行动很慢，我早就厌倦了这样古井无波的生活。我不在乎危险，是时候做出改变了。只是，我还有一个请求。"],[20,"什么？"],[3075,"我希望有朝一日，你能为我揭开那股神秘力量的真实身份。让我明白，发生的这一切，究竟是怎么回事？","我答应你！"]]
               }).doAction().then(function():void
               {
                  SocketConnection.sendWithPromise(43306,[29,2]);
               }).then(function():void
               {
                  KTool.changeMapWithCallBack(1,function():void
                  {
                     ModuleManager.showAppModule("AbilityPowerRiotSub1Panel");
                  });
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
                  ModuleManager.showAppModule("AbilityPowerRiotSub1Panel");
               });
               break;
            case "npc":
               if(this.needItem > 1)
               {
                  this.onNpcClick(2);
               }
               else
               {
                  this.onNpcClick(3);
               }
         }
      }
      
      override protected function updateState() : void
      {
         ui["ani"].visible = false;
         KTool.getMultiValue([104686,10596],function(param1:Array):void
         {
            var arr:Array = param1;
            ItemManager.updateAndGetItemsNum([1719017],function(param1:Array):void
            {
               var num:Array = param1;
               needItem = 4 - KTool.getByte(arr[0],1);
               taskStep = arr[1];
               if(taskStep == 0)
               {
                  ui["mc"].visible = false;
                  ui["arrow_1"].visible = false;
                  CommonUI.setEnabled(ui["npc"],false,false);
                  onNpcClick(1);
               }
               else if(num[0] > 0)
               {
                  ui["arrow_1"].visible = true;
                  ui["mc"].visible = false;
                  CommonUI.setEnabled(ui["npc"],true,false);
               }
               else
               {
                  ui["mc"].visible = true;
                  ui["mc"].gotoAndStop(5);
                  MovieClip(ui["mc"]).addEventListener(Event.FRAME_CONSTRUCTED,function(param1:Event):void
                  {
                     param1.currentTarget.removeEventListener(Event.FRAME_CONSTRUCTED,arguments.callee);
                     ui["mc"]["txt"].text = needItem;
                  });
                  ui["arrow_1"].visible = false;
                  CommonUI.setEnabled(ui["npc"],false,false);
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
