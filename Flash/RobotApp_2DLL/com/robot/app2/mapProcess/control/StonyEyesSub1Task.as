package com.robot.app2.mapProcess.control
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.actions.PlayTalksAction;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class StonyEyesSub1Task extends PlotTask
   {
       
      
      public function StonyEyesSub1Task(param1:MovieClip)
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
                  "value":[[2935,"你又来了！可恶，我跟你拼了！","？？？"]]
               }).doAction().then(function():void
               {
                  ModuleManager.showAppModule("StonyEyesFightPanel",1);
               });
               break;
            case 2:
               new PlayTalksAction({
                  "name":"talk",
                  "type":"talks",
                  "value":[[20,"冷静一点，奥杜萨！我来自赛尔号，是收到救援信号，前来支援你的！","真……真的吗？"],[20,"真的呀，还记得当年的石化之钥吗？你睁开眼睛，看看我，你见过我的！","石化之钥……"],[2935,"呜呜呜……如果当年不取出石化之钥，是不是就不会发生今天这种事情了。小赛尔，我不能睁开眼睛。唉，我怕是再也不能睁开眼睛了……","这是什么意思？你怎么了？"],[2935,"是他！我一辈子也忘不了这个声音。那个给我石化之钥的人又回来了！曾经的悲剧再一次重演……"],[2935,"他自称混沌教派，再次将石化之力封在了我的眼睛里。墨鲁萨他……他又……呜呜呜…………","混沌教派？！"],[20,"原来他竟然是混沌教派的人！奥杜萨，你不要难过了，我会像上次一样，想办法治好你的眼睛！","不，已经没有希望了……"]]
               }).doAction().then(function():Promise
               {
                  ui["ani_1"].visible = true;
                  ui["mc_1"].visible = false;
                  ui["mc_2"].visible = false;
                  return AnimateManager.playMcAnimateWithPromis(ui,1,"ani_1");
               }).then(function():Promise
               {
                  ui["ani_1"].visible = false;
                  return SocketConnection.sendWithPromise(43301,[5,2]);
               }).then(this.updateState);
               break;
            case 3:
               new PlayTalksAction({
                  "name":"talk",
                  "type":"talks",
                  "value":[[3,"经过上次石化之钥的事件之后，我早已对精灵的石化效果进行过研究。奥杜萨刚获得石化视力不过数日，有一种办法，可以将其祛除！","什么！我……有救了？"],[2935,"快告诉我该怎么做！"],[3,"首先你要获得一件宝贝：石胎玉。用它可以吸收你眼中的石化气息；你还需要一些隐竹泉水，它可以温养你的眼睛，让你恢复原状。","真的吗？太好了！"],[2935,"那……我该怎么才能找到这些东西呢？","交给我吧！"],[20,"我听说过石胎玉，它是麦斯一族的宝贝！至于隐竹泉水……一定在水竹山脉，我说的对不对，博士？","没错！"],[3,"隐竹泉水应该在竹林附近的水域中。此眼疾越早治疗越好，你速去速回。","明白了！"]]
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
               this.onNpcClick(state + 1);
         }
      }
      
      override protected function updateState() : void
      {
         KTool.getMultiValue([104514],function(param1:Array):void
         {
            state = param1[0] & 15;
            if(state >= 2)
            {
               ui["mc_2"].visible = true;
               ui["mc_2"].gotoAndStop(2);
               ui["mc_1"].visible = true;
               ui["mc_1"].gotoAndStop(1);
            }
            if(state == 1)
            {
               onNpcClick(2);
            }
         });
      }
   }
}
