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
   
   public class DragonGuardianTXMLLController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _mc:MovieClip;
      
      private static const BuffID:int = 22747;
      
      public static var noBonus:Boolean = false;
       
      
      public function DragonGuardianTXMLLController()
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
         if(MapManager.currentMap.id == 1084)
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
                     NpcDialog.show(NPC.TAI_XUAN_MU_LING_LONG,["你是谁？"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.SEER,["我是一个名叫赛尔的小机器人，现在宇宙有危难，我需要找到无上神龙大人。"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.TAI_XUAN_MU_LING_LONG,["机器人是什么？唔……不管了，既然你能走到这里，你的来意一定是得到过其他龙王的肯定的。"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.TAI_XUAN_MU_LING_LONG,["但是按照惯例，你需要接受我的考验。"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.SEER,["啊，这没有问题！我准备好了！"],null,null,false,function():void
                                 {
                                    NpcDialog.show(NPC.TAI_XUAN_MU_LING_LONG,["不要慌，我不喜欢战斗。我本是巨龙之森的守护之龙，奉命守护龙脉以来，我已经很久没有见到森林中的生灵和月光了。"],null,null,false,function():void
                                    {
                                       NpcDialog.show(NPC.TAI_XUAN_MU_LING_LONG,["你能帮我照顾一下森林中的树木吗？完成这项任务，我就算你初步通过了我的考验。"],["啊……这没有问题！"],[function():void
                                       {
                                          KTool.showMapAllPlayerAndMonster();
                                          MapObjectControl.hideOrShowAllObjects(true);
                                          openPrePanel();
                                          BitBuffSetClass.setState(BuffID,1);
                                          DisplayUtil.removeForParent(_mc);
                                          _map.depthLevel.visible = true;
                                          ToolBarController.panel.show();
                                          LevelManager.iconLevel.visible = true;
                                          openPrePanel();
                                       }]);
                                    });
                                 });
                              });
                           });
                        });
                     });
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
            MapManager.changeMap(1084);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
         }
      }
      
      public static function playCompletedAnim() : void
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
            AnimateManager.playMcAnimate(_mc,2,"mc",function():void
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
      
      private static function loadMc(param1:Function) : void
      {
         var fun:Function = param1;
         if(!_mc)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("dragon_guardian_5"),function(param1:MovieClip):void
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
         ModuleManager.showAppModule("DragonGuardianTXMLLPrePanel");
      }
   }
}
