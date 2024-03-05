package com.robot.app.control
{
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   import org.taomee.utils.StringUtil;
   
   public class DangerLoginController
   {
      
      private static var _ui:MovieClip;
       
      
      public function DangerLoginController()
      {
         super();
      }
      
      public static function setup(param1:Object) : void
      {
         var obj:Object = param1;
         if(obj)
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               var e:MapEvent = param1;
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               ResourceManager.getResource(ClientConfig.getAppRes("DangerLoginAlarmPanel"),function(param1:MovieClip):void
               {
                  _ui = param1;
                  LevelManager.appLevel.addChild(_ui);
                  DisplayUtil.align(_ui,null,AlignType.MIDDLE_CENTER);
                  var _loc2_:Date = new Date(obj.time * 1000);
                  _ui["ip"].text = StringUtil.hexToIp(obj.ip);
                  _ui["city"].text = obj.city;
                  _ui["time"].text = _loc2_.getFullYear() + "/" + (_loc2_.getMonth() + 1) + "/" + _loc2_.getDate() + " " + _loc2_.getHours() + ":" + _loc2_.getMinutes();
                  _ui["currentCity"].text = obj.currentCity;
                  _ui["close"].addEventListener(MouseEvent.CLICK,onClose);
                  _ui["mima"].addEventListener(MouseEvent.CLICK,onMima);
                  _ui["mibao"].addEventListener(MouseEvent.CLICK,onMibao);
                  MapManager.addEventListener(MapEvent.MAP_DESTROY,onMapChange);
               },"DangerLogin_ui");
            });
         }
      }
      
      private static function onClose(param1:MouseEvent) : void
      {
         destory();
      }
      
      private static function onMima(param1:MouseEvent) : void
      {
         LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_11);
         destory();
      }
      
      private static function onMibao(param1:MouseEvent) : void
      {
         LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_6);
         destory();
      }
      
      private static function onMapChange(param1:MapEvent) : void
      {
         destory();
      }
      
      private static function destory() : void
      {
         _ui["close"].removeEventListener(MouseEvent.CLICK,onClose);
         _ui["mima"].removeEventListener(MouseEvent.CLICK,onMima);
         _ui["mibao"].removeEventListener(MouseEvent.CLICK,onMibao);
         MapManager.removeEventListener(MapEvent.MAP_DESTROY,onMapChange);
         DisplayUtil.removeForParent(_ui);
         _ui = null;
      }
   }
}
