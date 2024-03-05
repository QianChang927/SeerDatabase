package com.robot.app.superParty
{
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.newloader.MCLoader;
   import flash.display.MovieClip;
   import org.taomee.utils.DisplayUtil;
   
   public class SPChannelController
   {
      
      private static var _spApp:AppModel;
      
      private static var _m_3:MovieClip;
      
      private static var _id:uint;
      
      public static var isSuerChannel:Boolean = false;
      
      public static var mapID:uint;
      
      private static var _mcLoader:MCLoader;
      
      private static var _bounsMC:MovieClip;
      
      {
         setup();
      }
      
      public function SPChannelController()
      {
         super();
      }
      
      public static function setup() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchHandler);
      }
      
      private static function onSwitchHandler(param1:MapEvent) : void
      {
         if(SPConfig.allIdA.length == 0)
         {
            SPConfig.makeInfo();
         }
         mapID = param1.mapModel.id;
         if(SPConfig.allIdA.indexOf(mapID) != -1)
         {
            ToolBarController.closeOrOpenImBtn(false);
            return;
         }
         ToolBarController.closeOrOpenImBtn(true);
         MapManager.addEventListener(MapEvent.MAP_DESTROY,ondesHandler);
      }
      
      private static function ondesHandler(param1:MapEvent) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_DESTROY,ondesHandler);
         mapID = 0;
      }
      
      public static function initMC(param1:MovieClip) : void
      {
         _m_3 = param1;
      }
      
      public static function changeMap(param1:uint) : void
      {
         MainManager.actorModel.visible = false;
         LevelManager.closeMouseEvent();
         if(_spApp)
         {
            _spApp.destroy();
         }
         _id = param1;
         end2();
      }
      
      private static function end2() : void
      {
         isSuerChannel = true;
         playAi();
      }
      
      public static function playAi() : void
      {
         _mcLoader = new MCLoader(ClientConfig.getFullMovie("Spaceshuttle"),LevelManager.topLevel,1,"正在加载动画....");
         _mcLoader.addEventListener(MCLoadEvent.SUCCESS,onSucHandler);
         _mcLoader.doLoad();
      }
      
      private static function onSucHandler(param1:MCLoadEvent) : void
      {
         _bounsMC = param1.getContent() as MovieClip;
         _bounsMC.addFrameScript(_bounsMC.totalFrames - 1,onEndHandler);
         LevelManager.appLevel.addChild(_bounsMC);
      }
      
      private static function onEndHandler() : void
      {
         _bounsMC.gotoAndStop(_bounsMC.totalFrames - 1);
         _bounsMC.addFrameScript(_bounsMC.totalFrames - 1,null);
         DisplayUtil.removeForParent(_bounsMC);
         _bounsMC = null;
         _mcLoader.clear();
         _mcLoader.removeEventListener(MCLoadEvent.SUCCESS,onSucHandler);
         _mcLoader = null;
         MapManager.changeMap(_id);
         LevelManager.openMouseEvent();
         MainManager.actorModel.visible = true;
      }
      
      public static function show() : void
      {
         showPanel();
      }
      
      private static function showPanel() : void
      {
         if(!_spApp)
         {
            _spApp = new AppModel(ClientConfig.getAppModule("SPPanel"),"正在打开超时空通道");
            _spApp.setup();
         }
         _spApp.init(SPConfig.infos);
         _spApp.show();
      }
   }
}
