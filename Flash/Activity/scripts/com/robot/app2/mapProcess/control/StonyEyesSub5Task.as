package com.robot.app2.mapProcess.control
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.actions.PlayTalksAction;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class StonyEyesSub5Task extends PlotTask
   {
       
      
      private var todayCompletTask2:Boolean;
      
      private var todayCompletTask2Talk:Boolean;
      
      public function StonyEyesSub5Task(param1:MovieClip)
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
                  "value":[[20,"之前的隐竹泉水不够，我还需要3滴！求求你们了，我的朋友快要坚持不住了！","可是我们已经没有更多的泉水了！"],[2938,"隐竹泉水神妙异常。每天只会产生3滴，且到了第二天，之前的泉水就会失去神效。想要更多的隐竹泉水，你只能明天再来了！","什么！"],[20,"真的……真的没有其他办法了吗？","我们非常理解你的焦急，但是爱莫能助。"],[20,"可恶……奥杜萨，你一定要坚持住啊！明天，明天我就带着泉水回来救你！","明天再来找我们吧！"]]
               }).doAction().then(function():void
               {
                  ModuleManager.showAppModule("StonyEyesTipsPanel");
               });
               break;
            case 2:
               new PlayTalksAction({
                  "name":"talk",
                  "type":"talks",
                  "value":[[20,"之前的隐竹泉水不够，我还需要3滴！求求你们了，我的朋友快要坚持不住了！","我们已经帮你准备好了！"],[2938,"我们非常理解你的焦急，今天的隐竹泉水一出现，我们就帮你采集好了！","真的吗？太谢谢你们了！"],[2938,"快拿去吧，你的朋友还在等着你！","奥杜萨，我来救你了！"]]
               }).doAction().then(function():void
               {
                  KTool.changeMapWithCallBack(11712,function():void
                  {
                  });
               });
               break;
            case 3:
               new PlayTalksAction({
                  "name":"talk",
                  "type":"talks",
                  "value":[[20,"博士，奥杜萨怎么样了？我带着隐竹泉水回来了！这隐竹泉水每天只……","先别废话了，快给奥杜萨疗伤！"],[20,"（轻轻地将泉水滴在了奥杜萨的眼眶里）"],[20,"奥杜萨，感觉怎么样？"],[2935,"灼热与干涩，终于消褪了……我的眼睛很放松，前所未有的放松……"],[2935,"（慢慢地睁开了眼睛。）原来是你……我见过你！","你能看见了！"],[2935,"哈哈，博士，奥杜萨终于恢复了！","谢谢你们。"],[2935,"当年你们救了我的伙伴，现在你们又救了我。我……我又欠你们一个人情。","哪里的话！"],[2935,"这块石胎玉吸收了我的石化之力，发生了一些奇妙变化，就送给你们吧！"]]
               }).doAction().then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43301,[9,1]);
               }).then(this.updateState);
               break;
            case 4:
               new PlayTalksAction({
                  "name":"talk",
                  "type":"talks",
                  "value":[[20,"咦？石胎玉变成了……一枚刻印？"],[2935,"没错，而且这石化之力它并未完全吸收……如果你能找到一枚御灵翡翠，我还可以再帮你制作一枚刻印！","真的吗？"],[3,"好心之人，终有好报。听说狂暴战熊拥有一块御灵翡翠，你可以去问问他。","真是太棒了！"]]
               }).doAction().then(function():void
               {
                  ModuleManager.showAppModule("StonyEyesTipsPanel");
               });
         }
      }
      
      override protected function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(e.target.name)
         {
            case "close":
               KTool.changeMapWithCallBack(1,function():void
               {
                  ModuleManager.showAppModule("StonyEyesMainPanel");
               });
               break;
            case "npc_1":
               if(this.todayCompletTask2 && !this.todayCompletTask2Talk)
               {
                  this.onNpcClick(1);
               }
               else if(!this.todayCompletTask2)
               {
                  if(MapManager.currentMap.id == 11712)
                  {
                     this.onNpcClick(state == 1 ? 4 : 3);
                  }
                  else
                  {
                     this.onNpcClick(2);
                  }
               }
         }
      }
      
      override protected function updateState() : void
      {
         KTool.getMultiValue([104514,16952],function(param1:Array):void
         {
            state = param1[0] >> 16 & 15;
            todayCompletTask2 = KTool.getBit(param1[1],1) > 0 ? true : false;
            todayCompletTask2Talk = KTool.getBit(param1[1],2) > 0 ? true : false;
            if(state == 1 && MapManager.currentMap.id == 11712)
            {
               onNpcClick(4);
            }
         });
      }
   }
}
