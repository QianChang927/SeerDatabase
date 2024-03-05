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
   
   public class StonyEyesSub2Task extends PlotTask
   {
       
      
      public function StonyEyesSub2Task(param1:MovieClip)
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
                  "value":[[2936,"你是谁？！快住手，不然我们要不客气了！"],[20,"啊！对不起……我看这块玉石颇为神奇，就想上前仔细看看……","花言巧语！"],[2936,"打着你这样的幌子，想要偷走我们石胎玉的小偷，我们不知道见了多少了！请立刻离开这里！","石胎玉？"],[20,"原来这就是石胎玉，果然神妙！不瞒你说，我来这里就是为了它！我有一位朋友中了诅咒，听说只有石胎玉才能治好。不知贵族能否割爱？"],[2936,"哼，偷不到，就想骗？你当我们是傻瓜吗？马西莫斯，给我打他！"]]
               }).doAction().then(function():Promise
               {
                  ui["mc"].visible = false;
                  ui["npc_1"].visible = false;
                  ui["arrow_1"].visible = false;
                  ui["bg"].visible = false;
                  ui["ani_1"].visible = true;
                  return AnimateManager.playMcAnimateWithPromis(ui,1,"ani_1");
               }).then(function():Promise
               {
                  ui["ani_1"].visible = false;
                  ui["bg"].visible = true;
                  ui["mc"].visible = true;
                  return SocketConnection.sendWithPromise(43301,[6,1]);
               }).then(this.updateState);
               break;
            case 2:
               new PlayTalksAction({
                  "name":"talk",
                  "type":"talks",
                  "value":[[2937,"我是麦斯一族最强的勇士马西莫斯！速速离去，否则休怪我无情！"]]
               }).doAction().then(function():void
               {
                  ModuleManager.showAppModule("StonyEyesFightPanel",2);
               });
               break;
            case 3:
               new PlayTalksAction({
                  "name":"talk",
                  "type":"talks",
                  "value":[[2937,"可恶……我……决不能让你轻易地带走我族的宝物……","马西莫斯，这是误会！"],[20,"如果我想直接抢走石胎玉，你根本挡不住我！我真的只想请求各位，我的朋友急需这件东西治病，希望各位能够予以援助！"],[2936,"好像他说的有那么一点道理……"],[2937,"我们没人是你对手，你说怎样，那就怎样吧！","这……"],[20,"看来我们依旧没有消除误会，但是时间紧迫，我只能带着石胎玉先走一步了！麦斯一族的恩情我绝不会忘记，等我朋友康复，我一定会回来负荆请罪！","哼！"]]
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
            state = param1[0] >> 4 & 15;
            if(state >= 1)
            {
               ui["arrow_1"].visible = true;
               ui["npc_1"].visible = true;
               ui["mc"].gotoAndStop(2);
            }
            if(state == 2)
            {
               onNpcClick(3);
            }
         });
      }
   }
}
