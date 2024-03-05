package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class EarlSerraController
   {
      
      private static var _taskMc:MovieClip;
      
      private static var _map:BaseMapProcess;
       
      
      public function EarlSerraController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         _map = param1;
      }
      
      public static function clickEquip1() : void
      {
         if(MapManager.currentMap.id == 61)
         {
            if(BitBuffSetClass.getState(22538))
            {
               showPanel();
            }
            else
            {
               playPreStory();
            }
         }
         else
         {
            MapManager.changeMap(61);
         }
      }
      
      public static function clickEquip2() : void
      {
         NpcDialog.show(NPC.QINGLONG,["赛尔们，龙族的即将面临灾难，抵抗强敌需你们尽一份力！"],["去看看究竟！","还算了吧！"],[function():void
         {
            if(MapManager.currentMap.id == 61)
            {
               if(BitBuffSetClass.getState(22538))
               {
                  MapManager.changeMap(1006);
               }
               else
               {
                  playPreStory();
               }
            }
            else
            {
               MapManager.changeMap(61);
            }
         }]);
      }
      
      private static function playPreStory() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_61_12"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            KTool.hideMapAllPlayerAndMonster();
            _map.btnLevel.addChild(mc);
            _map.conLevel.visible = false;
            MapObjectControl.hideOrShowAllObjects(false);
            AnimateManager.playMcAnimate(mc,1,"mc",function():void
            {
               AnimateManager.playMcAnimate(mc,2,"mc",function():void
               {
                  _map.conLevel.visible = true;
                  MapObjectControl.hideOrShowAllObjects(true);
                  KTool.showMapAllPlayerAndMonster();
                  BitBuffSetClass.setState(22538,1);
                  DisplayUtil.removeForParent(mc);
                  StatManager.sendStat2014("spt超进化","看完前制动画的",StatManager.RUN_ACT);
               });
            });
         });
      }
      
      private static function showPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("EarlSerraEvolvePanel"),"正在努力打开面板...");
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
