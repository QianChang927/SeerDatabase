package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class AncestryMasterAndApprenticeReturnController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _npc:MovieClip;
       
      
      public function AncestryMasterAndApprenticeReturnController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         ResourceManager.getResource(ClientConfig.getMapAnimate("ancestry_master_and_appretice_retrun_npc"),function(param1:MovieClip):void
         {
            _npc = param1;
            _npc.buttonMode = true;
            _npc.addEventListener(MouseEvent.CLICK,onClick);
            _map.conLevel.addChild(_npc);
            _npc.gotoAndPlay(1);
         });
      }
      
      public static function onMapObject() : void
      {
         if(BitBuffSetClass.getState(22589))
         {
            MapManager.changeLocalMap(10773);
            return;
         }
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         NpcController.npcVisible = false;
         ResourceManager.getResource(ClientConfig.getMapAnimate("ancestry_master_and_appretice_retrun_mc_1"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            LevelManager.stage.addChild(mc);
            AnimateManager.playMcAnimate(mc,1,"mc1",function():void
            {
               BitBuffSetClass.setState(22589,1);
               DisplayUtil.removeForParent(mc);
               KTool.showMapAllPlayerAndMonster();
               MapObjectControl.hideOrShowAllObjects(true);
               NpcController.npcVisible = true;
               NpcDialog.show(NPC.ATIEDA,["那我们现在就去看看吧！"],["好的，走！","算了，我突然不想去了……"],[function():void
               {
                  MapManager.changeLocalMap(10773);
               }]);
            });
         });
      }
      
      public static function destroy() : void
      {
         _npc.removeEventListener(MouseEvent.CLICK,onClick);
         _npc = null;
         _map = null;
      }
      
      private static function playFullMovie() : void
      {
         if(BitBuffSetClass.getState(22591))
         {
            ModuleManager.showModule(ClientConfig.getAppModule("AncestryMasterAndApprenticeReturnMainPanel"));
            return;
         }
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("ancestry_master_and_appretice_retrun_full"),function():void
         {
            BitBuffSetClass.setState(22591,1);
            ModuleManager.showModule(ClientConfig.getAppModule("AncestryMasterAndApprenticeReturnMainPanel"));
         });
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(BitBuffSetClass.getState(22590))
         {
            playFullMovie();
            return;
         }
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         NpcController.npcVisible = false;
         _npc.visible = false;
         ResourceManager.getResource(ClientConfig.getMapAnimate("ancestry_master_and_appretice_retrun_mc_2"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            LevelManager.stage.addChild(mc);
            AnimateManager.playMcAnimate(mc,1,"mc1",function():void
            {
               BitBuffSetClass.setState(22590,1);
               DisplayUtil.removeForParent(mc);
               KTool.showMapAllPlayerAndMonster();
               MapObjectControl.hideOrShowAllObjects(true);
               NpcController.npcVisible = true;
               _npc.visible = true;
               playFullMovie();
            });
         });
      }
   }
}
