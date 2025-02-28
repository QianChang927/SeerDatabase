package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.actions.PlayTalksAction;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_11700 extends BaseMapProcess
   {
       
      
      private var state:int;
      
      public function MapProcess_11700()
      {
         super();
         MapObjectControl.hideOrShowAllObjects(false);
         MainManager.actorInfo.mapID = 11700;
      }
      
      override protected function init() : void
      {
         LevelManager.iconLevel.visible = false;
         MainManager.actorInfo.mapID = 11700;
         KTool.hideMapPlayerAndMonster();
         conLevel.addEventListener(MouseEvent.CLICK,this.onConClick);
      }
      
      public function onConClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "boss_" + index:
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[2924,"啊！菇菇发！菇菇发你怎么在这里？","！"],[2930,"呜呜呜…蘑牙牙….你终于来救我了…","怎么回事？"],[2930,"呜呜呜…你快帮我打败这个大坏蛋，他要把我抓走…","可恶！"],[2929,"哈哈哈，不要哭了，你哭我也不会放你走呀！","！你是谁？为什么要抓菇菇发？"],[2929,"哈哈哈，这么可爱的精灵，还是乖乖地跟我走吧！","真是可恶！别怕，菇菇发！我这就来救你！"],[2929,"哈哈哈，你要打败我？想太多了，让我看看你有什么本事！","废话少说！邪恶是不可能战胜正义的！来一战吧！"]]
               }).doAction().then(function():void
               {
                  StatManager.sendStat2014("0817 浪漫游乐园","弹出爆破先锋确认战斗弹窗","2018运营活动");
                  ModuleManager.showAppModule("RomanticAmusementParkSub3Panel");
               });
         }
      }
      
      override public function destroy() : void
      {
         LevelManager.iconLevel.visible = true;
         MapObjectControl.hideOrShowAllObjects(true);
         KTool.showMapPlayerAndMonster();
         super.destroy();
      }
   }
}
