package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class DragonGuardianBXXLController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _mc:MovieClip;
      
      private static const BuffID:int = 22736;
       
      
      public function DragonGuardianBXXLController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         _map = param1;
      }
      
      public static function destroy() : void
      {
         _map = null;
         _mc = null;
      }
      
      public static function clickEquip() : void
      {
         var onMapChange:Function = null;
         if(MapManager.currentMap.id == 1082)
         {
            if(BitBuffSetClass.getState(BuffID))
            {
               openPrePanel();
            }
            else
            {
               loadMc(function(param1:MovieClip):void
               {
                  var mc:MovieClip = param1;
                  KTool.hideMapAllPlayerAndMonster();
                  MapObjectControl.hideOrShowAllObjects(false);
                  _map.btnLevel.addChild(_mc);
                  _map.depthLevel.visible = false;
                  ToolBarController.panel.hide();
                  LevelManager.iconLevel.visible = false;
                  AnimateManager.playMcAnimate(_mc,1,"mc",function():void
                  {
                     KTool.showMapAllPlayerAndMonster();
                     MapObjectControl.hideOrShowAllObjects(true);
                     openPrePanel();
                     BitBuffSetClass.setState(BuffID,1);
                     DisplayUtil.removeForParent(_mc);
                     _map.depthLevel.visible = true;
                     ToolBarController.panel.show();
                     LevelManager.iconLevel.visible = true;
                  });
               });
            }
         }
         else
         {
            onMapChange = function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
               clickEquip();
            };
            MapManager.changeMap(1082);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
         }
      }
      
      private static function loadMc(param1:Function) : void
      {
         var fun:Function = param1;
         if(!_mc)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("dragon_guardian_4"),function(param1:MovieClip):void
            {
               _mc = param1;
               fun(_mc);
            });
         }
         else
         {
            fun(_mc);
         }
      }
      
      private static function openPrePanel() : void
      {
         ModuleManager.showAppModule("DragonGuardianBXXLPrePanel");
      }
      
      public static function openMainPanel() : void
      {
         if(BitBuffSetClass.getState(22737))
         {
            KTool.getMultiValue([1786,1787],function(param1:Array):void
            {
               if(param1[0] >= 100 && param1[1] >= 100)
               {
                  ModuleManager.showAppModule("DragonGuardianBXXLFinalPanel");
               }
               else
               {
                  ModuleManager.showAppModule("DragonGuardianBXXLPanel");
               }
            });
            return;
         }
         loadMc(function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            KTool.hideMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(false);
            _map.btnLevel.addChild(_mc);
            _map.depthLevel.visible = false;
            ToolBarController.panel.hide();
            LevelManager.iconLevel.visible = false;
            AnimateManager.playMcAnimate(_mc,2,"mc",function():void
            {
               NpcDialog.show(NPC.BAXUEXINGLONG,["怎么样？感受到鲜血和星光的平衡了吗？"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.SEER,["我……我都转晕了……"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.BAXUEXINGLONG,["哈哈哈，这么点时间你当然不可能理解其中的奥义！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.BAXUEXINGLONG,["如果你能通过我的考验，你自然会明白。"],["尽管放马过来！"],[function():void
                        {
                           KTool.showMapAllPlayerAndMonster();
                           MapObjectControl.hideOrShowAllObjects(true);
                           ModuleManager.showAppModule("DragonGuardianBXXLPanel");
                           DisplayUtil.removeForParent(_mc);
                           _map.depthLevel.visible = true;
                           BitBuffSetClass.setState(22737,1);
                           ToolBarController.panel.show();
                           LevelManager.iconLevel.visible = true;
                        }]);
                     });
                  });
               });
            });
         });
      }
      
      public static function playCompleteAnim(param1:Function) : void
      {
         var fun:Function = param1;
         loadMc(function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            KTool.hideMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(false);
            _map.btnLevel.addChild(_mc);
            _map.depthLevel.visible = false;
            ToolBarController.panel.hide();
            LevelManager.iconLevel.visible = false;
            AnimateManager.playMcAnimate(_mc,3,"mc",function():void
            {
               KTool.showMapAllPlayerAndMonster();
               MapObjectControl.hideOrShowAllObjects(true);
               DisplayUtil.removeForParent(_mc);
               _map.depthLevel.visible = true;
               ToolBarController.panel.show();
               LevelManager.iconLevel.visible = true;
               if(fun != null)
               {
                  fun();
               }
            });
         });
      }
   }
}
