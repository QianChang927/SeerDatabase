package com.robot.app2.mapProcess
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.actions.PlayTalksAction;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.events.Event;
   import flash.events.MouseEvent;
   
   public class MapProcess_11723 extends BaseMapProcess
   {
       
      
      private var _index:uint;
      
      public function MapProcess_11723()
      {
         super();
      }
      
      override protected function init() : void
      {
         LevelManager.iconLevel.visible = false;
         MainManager.actorInfo.mapID = 11723;
         KTool.hideMapPlayerAndMonster();
         super.init();
         this.update();
      }
      
      protected function update() : void
      {
         KTool.getBitSet([9201],function(param1:Array):void
         {
            if(param1[0] == 0)
            {
               depthLevel["npc"].addEventListener(MouseEvent.CLICK,onClick);
            }
         });
      }
      
      protected function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(Event(e).currentTarget.name)
         {
            case "npc":
               new PlayTalksAction({
                  "name":"talk",
                  "type":"talks",
                  "value":[[1,"你来了，" + MainManager.actorInfo.nick + "。","向您报到，罗杰船长！"],[1,"现在事态紧急，已经有多名船员向我反映过情况了。马上临近开学，在舱室里的消毒液都被盗走了 。"],[1,"不仅如此，资料室的爱丽丝也向我反映，之前搬运来的好几本安全手册也都被偷走了，那些本来是用于给小赛尔们进行宣传的！ "],[1,"多种证据表明，这是一起有预谋、有组织的恶意行动，旨在破坏教学氛围，影响赛尔成长，这种罪行不能姑息！好在，我们已经有了线索。","什么线索？"],[1,"我们的特工传回消息，8月30日—9月5日的每个整点都是他们的作案时间，我们需要在此期间展开雷霆行动，将所有要犯抓捕归案！","是！一定不会让您失望！"]]
               }).doAction().then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43301,[18,1]);
               }).then(function():void
               {
                  KTool.changeMapWithCallBack(1,function():void
                  {
                     ModuleManager.showAppModule("OpenSchoole1809StartPanel");
                  });
               });
         }
      }
      
      override public function destroy() : void
      {
         if(depthLevel["npc"].hasEventListener(MouseEvent.CLICK))
         {
            depthLevel["npc"].removeEventListener(MouseEvent.CLICK,this.onClick);
         }
         LevelManager.iconLevel.visible = true;
         MapObjectControl.hideOrShowAllObjects(true);
         KTool.showMapPlayerAndMonster();
         super.destroy();
      }
   }
}
