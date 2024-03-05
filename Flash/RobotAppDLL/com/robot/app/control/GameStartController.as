package com.robot.app.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.GameEvent;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.GamePlatformManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.DisplayObject;
   import flash.events.Event;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class GameStartController
   {
      
      private static var _loader:MCLoader;
      
      private static var _swf:DisplayObject;
      
      private static var _start:String;
      
      private static var _target:String;
      
      private static var _isNet:Boolean;
      
      private static var _gameId:uint;
      
      private static var _obj:Object;
      
      private static var _isApp:Boolean;
       
      
      public function GameStartController()
      {
         super();
      }
      
      public static function show(param1:String, param2:String, param3:Boolean = true, param4:uint = 1, param5:Object = null, param6:Boolean = true) : void
      {
         canelLoader();
         _start = param1;
         _target = param2;
         _isNet = param3;
         _gameId = param4;
         _obj = param5;
         _isApp = param6;
         loadSwf();
      }
      
      private static function loadSwf() : void
      {
         _loader = new MCLoader(ClientConfig.getGameStartPath(_start),null,1,"正在加载游戏开始界面…");
         _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadDLL);
         _loader.addEventListener(MCLoadEvent.ERROR,onLoadErr);
         _loader.doLoad();
      }
      
      private static function onLoadErr(param1:MCLoadEvent) : void
      {
         _loader.removeEventListener(MCLoadEvent.ERROR,onLoadErr);
         _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadDLL);
         Alarm.show("加载失败！",clear);
      }
      
      private static function onLoadDLL(param1:MCLoadEvent) : void
      {
         _loader.removeEventListener(MCLoadEvent.ERROR,onLoadErr);
         _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadDLL);
         _swf = param1.getContent();
         if(_swf)
         {
            _swf.addEventListener("startGame",onGameStartHandler);
            _swf.addEventListener("closeGame",onGameCloseHandler);
            LevelManager.gameLevel.addChild(_swf);
            DisplayUtil.align(_swf,null,AlignType.MIDDLE_CENTER);
         }
      }
      
      private static function onGameStartHandler(param1:Event) : void
      {
         remove();
         GamePlatformManager.join(_target,_isNet,_gameId,_obj,_isApp);
         EventManager.dispatchEvent(new GameEvent(GameEvent.START,_start));
         if(_target == "ZumaGame")
         {
            SocketConnection.send(1022,86065603);
         }
         else if(_target == "FlyeavesgowallGame")
         {
            SocketConnection.send(1022,86065604);
         }
      }
      
      private static function onGameCloseHandler(param1:Event) : void
      {
         remove();
         EventManager.dispatchEvent(new GameEvent(GameEvent.CANCEL,_start));
      }
      
      private static function remove() : void
      {
         if(_swf)
         {
            DisplayUtil.removeForParent(_swf);
            _swf.removeEventListener("startGame",onGameStartHandler);
            _swf.removeEventListener("closeGame",onGameCloseHandler);
            _swf = null;
         }
      }
      
      private static function canelLoader() : void
      {
         if(_loader)
         {
            _loader.removeEventListener(MCLoadEvent.ERROR,onLoadErr);
            _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadDLL);
            _loader.closeLoading();
            _loader.clear();
            _loader = null;
         }
      }
      
      public static function clear() : void
      {
         canelLoader();
         remove();
      }
   }
}
