package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NpcController;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MachinePetAssembleController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _npc:MovieClip;
       
      
      public function MachinePetAssembleController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         StatManager.sendStat2014("新年福利大回馈第二弹","进入活动场景","2015运营活动");
         _map = map;
         playPre(function():void
         {
            ResourceManager.getResource(ClientConfig.getActiveUrl("machine_pet_assemble_npc"),function(param1:MovieClip):void
            {
               _npc = param1;
               _npc.buttonMode = true;
               _npc.addEventListener(MouseEvent.CLICK,onClickNpc);
               _map.conLevel.addChild(_npc);
            });
         });
      }
      
      public static function destroy() : void
      {
         _map.conLevel.removeChild(_npc);
         _npc.removeEventListener(MouseEvent.CLICK,onClickNpc);
         _npc = null;
         _map = null;
      }
      
      private static function playPre(param1:Function) : void
      {
         var fun:Function = param1;
         if(BitBuffSetClass.getState(22615))
         {
            fun();
         }
         else
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("machine_pet_assemble_map_movie"),function(param1:MovieClip):void
            {
               var mc:MovieClip = param1;
               KTool.hideMapAllPlayerAndMonster();
               MapObjectControl.hideOrShowAllObjects(false);
               NpcController.npcVisible = false;
               LevelManager.iconLevel.visible = false;
               ToolBarController.panel.hide();
               ModuleManager.hideAllModule();
               LevelManager.stage.addChild(mc);
               AnimateManager.playMcAnimate(mc,1,"mc",function():void
               {
                  DisplayUtil.removeForParent(mc);
                  BitBuffSetClass.setState(22615,1);
                  KTool.showMapAllPlayerAndMonster();
                  MapObjectControl.hideOrShowAllObjects(true);
                  NpcController.npcVisible = true;
                  LevelManager.iconLevel.visible = true;
                  ToolBarController.panel.show();
                  fun();
               });
            });
         }
      }
      
      private static function onClickNpc(param1:MouseEvent) : void
      {
         ModuleManager.showAppModule("MachinePetAssembleMainPanel");
      }
   }
}
