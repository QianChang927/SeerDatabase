package com.robot.app2.spt
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class DarkTriangleMonsterController
   {
      
      public static var _map:BaseMapProcess;
       
      
      public function DarkTriangleMonsterController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.conLevel["DarkTriangleMonster"].buttonMode = true;
         _map.conLevel["DarkTriangleMonster"].addEventListener(MouseEvent.CLICK,onClickNpc);
      }
      
      private static function onClickNpc(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(BitBuffSetClass.getState(22757))
         {
            fight();
         }
         else
         {
            ResourceManager.getResource(ClientConfig.getActiveUrl("sptDarkTriangleMonster"),function(param1:MovieClip):void
            {
               var mc:MovieClip = param1;
               _map.conLevel.addChild(mc);
               _map.conLevel["DarkTriangleMonster"].visible = false;
               MapObjectControl.hideOrShowAllObjects(false);
               KTool.hideMapAllPlayerAndMonster();
               AnimateManager.playMcAnimate(mc,1,"mc1",function():void
               {
                  _map.conLevel.removeChild(mc);
                  _map.conLevel["DarkTriangleMonster"].visible = true;
                  MapObjectControl.hideOrShowAllObjects(true);
                  KTool.showMapAllPlayerAndMonster();
                  fight();
               });
            });
            BitBuffSetClass.setState(22757,1);
         }
      }
      
      private static function fight() : void
      {
         FightManager.fightWithBoss("黑暗三角兽",1);
      }
      
      public static function destroy() : void
      {
         _map.conLevel["DarkTriangleMonster"].removeEventListener(MouseEvent.CLICK,onClickNpc);
         _map = null;
      }
   }
}
