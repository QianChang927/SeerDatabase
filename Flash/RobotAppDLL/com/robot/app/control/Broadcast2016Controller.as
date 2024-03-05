package com.robot.app.control
{
   import com.robot.app.control.broadCast.IBroadCastType;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.UpdateConfig;
   import com.robot.core.config.xml.BroadCastXMLInfo;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.info.Broadcast2016Info;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.utils.UserState;
   import flash.display.MovieClip;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.net.URLLoader;
   import flash.text.TextField;
   import flash.utils.Timer;
   import flash.utils.getDefinitionByName;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class Broadcast2016Controller
   {
      
      private static var _ui:MovieClip;
      
      private static var _cd:Boolean = false;
      
      public static var _currentInfo:Broadcast2016Info;
      
      public static var _array:Array = [];
      
      public static var broadCastXml:XML;
      
      private static var _timer:Timer;
      
      private static var broadLoader:URLLoader;
      
      private static var url:String = "xml/Broadcasts.xml";
      
      private static var broadCastType:IBroadCastType;
       
      
      public function Broadcast2016Controller()
      {
         super();
      }
      
      public static function addBroadcast(param1:Broadcast2016Info, param2:Boolean = false) : void
      {
         if(param1 == null)
         {
            return;
         }
         if(UpdateConfig.banBroadcast)
         {
            return;
         }
         _array.push(param1);
         showBroadcast();
      }
      
      public static function showBroadcast() : void
      {
         var htmlStr:String;
         XML.prettyPrinting = false;
         try
         {
            if(NewSeerTaskController.isNewSeer)
            {
               return;
            }
         }
         catch(error:Error)
         {
            return;
         }
         if(MainManager.actorState != UserState.MAP)
         {
            return;
         }
         if(AnimateManager.AnimatePlaying)
         {
            return;
         }
         if(MapManager.currentMap == null)
         {
            return;
         }
         if(_cd || _array.length == 0)
         {
            return;
         }
         _cd = true;
         _currentInfo = _array.shift();
         if(_ui == null)
         {
            _ui = UIManager.getMovieClip("ui_Broadcast_mc");
         }
         htmlStr = String(BroadCastXMLInfo.broadCastXml.broadCast.(@ID == _currentInfo.id).p[0]);
         handleElement(htmlStr);
         LevelManager.toolsLevel.addChild(resizeMc(_ui));
         XML.prettyPrinting = true;
         if(_timer == null)
         {
            _timer = new Timer(int(BroadCastXMLInfo.broadCastXml.broadCast.(@ID == _currentInfo.id).@during),1);
         }
         else
         {
            _timer.stop();
            _timer = new Timer(int(BroadCastXMLInfo.broadCastXml.broadCast.(@ID == _currentInfo.id).@during),1);
         }
         _timer.addEventListener(TimerEvent.TIMER,onTimer);
         _timer.start();
      }
      
      private static function handleElement(param1:String) : void
      {
         var type:int = 0;
         var clsName:String = null;
         var cls:Class = null;
         var htmlStr:String = param1;
         type = int(BroadCastXMLInfo.broadCastXml.broadCast.(@ID == _currentInfo.id).@type);
         if(type == 0)
         {
            return;
         }
         clsName = String(BroadCastXMLInfo.broadCastXml.broadCastType.(@type == type).@className);
         if(clsName == "")
         {
            return;
         }
         cls = getDefinitionByName(clsName) as Class;
         broadCastType = new cls();
         broadCastType.handleHtmlStr(htmlStr,_ui);
      }
      
      private static function resizeMc(param1:MovieClip) : MovieClip
      {
         param1["txt"].width = (param1["txt"] as TextField).textWidth + 30;
         if(param1["bar"])
         {
            param1["bar"].width = param1["txt"].width + 54;
         }
         DisplayUtil.align(param1,null,AlignType.TOP_CENTER,new Point(0,60));
         return param1;
      }
      
      private static function onTimer(param1:TimerEvent) : void
      {
         if(_ui)
         {
            broadCastType.destroy();
            DisplayUtil.removeForParent(_ui);
            _ui = null;
         }
         _cd = false;
         showBroadcast();
      }
   }
}
