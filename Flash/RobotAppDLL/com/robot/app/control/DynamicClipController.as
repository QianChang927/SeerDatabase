package com.robot.app.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import flash.display.DisplayObject;
   import flash.display.DisplayObjectContainer;
   import flash.events.Event;
   import flash.net.URLLoader;
   import flash.net.URLRequest;
   import org.taomee.ds.HashMap;
   import org.taomee.manager.ResourceManager;
   
   public class DynamicClipController
   {
      
      private static var _urlLoader:URLLoader;
      
      private static var _targets:HashMap;
      
      private static var _refs:HashMap;
       
      
      public function DynamicClipController()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc1_:String = null;
         _targets = new HashMap();
         _refs = new HashMap();
         _urlLoader = new URLLoader();
         _urlLoader.addEventListener(Event.COMPLETE,onLoadDone);
         _loc1_ = "appRes/update/daAnTiao/dynamic_clip_config.xml";
         _urlLoader.load(new URLRequest(ClientConfig.getResPath(_loc1_)));
      }
      
      private static function onLoadDone(param1:Event) : void
      {
         _urlLoader.removeEventListener(Event.COMPLETE,onLoadDone);
         var _loc2_:XML = XML(_urlLoader.data);
         parseTarget(_loc2_.elements("targets").children());
         selectRef(_loc2_.elements("refs"));
         _urlLoader = null;
      }
      
      private static function parseTarget(param1:XMLList) : void
      {
         var _loc2_:XML = null;
         var _loc3_:TargetInfo = null;
         for each(_loc2_ in param1)
         {
            if(_loc2_.hasOwnProperty("@id") && _loc2_.hasOwnProperty("@target"))
            {
               _loc3_ = new TargetInfo();
               _loc3_.id = _loc2_.@id;
               _loc3_.target = _loc2_.@target;
               if(_loc2_.@goMapId != null)
               {
                  _loc3_.goMapId = int(_loc2_.@goMapId);
               }
               else
               {
                  _loc3_.goMapId = 0;
               }
               _targets.add(_loc3_.id,_loc3_);
            }
         }
      }
      
      private static function selectRef(param1:XMLList) : void
      {
         parseRef(param1.children());
      }
      
      private static function getTimeObject(param1:String) : Object
      {
         var _loc2_:int = int(param1.substr(0,4));
         var _loc3_:int = int(param1.substr(4,2));
         var _loc4_:int = int(param1.substr(6,2));
         return {
            "year":_loc2_,
            "month":_loc3_,
            "day":_loc4_
         };
      }
      
      private static function parseRef(param1:XMLList) : void
      {
         var _loc2_:XML = null;
         var _loc3_:RefInfo = null;
         for each(_loc2_ in param1)
         {
            if(_loc2_.hasOwnProperty("@id") && _loc2_.hasOwnProperty("@target") && _loc2_.hasOwnProperty("@clipPath"))
            {
               _loc3_ = new RefInfo();
               _loc3_.id = _loc2_.@id;
               _loc3_.target = _loc2_.@target;
               _loc3_.clipPath = _loc2_.@clipPath;
               _refs.add(_loc3_.id,_loc3_);
            }
         }
      }
      
      public static function attach(param1:int, param2:Function = null, param3:String = "item") : void
      {
         ResourceManager.getResource(ClientConfig.getAppRes("dynamicClip/" + getClipPath(param1)),param2,param3);
      }
      
      public static function attachTo(param1:int, param2:DisplayObjectContainer, param3:int = 0, param4:int = 0) : void
      {
         var refId:int = param1;
         var parent:DisplayObjectContainer = param2;
         var x:int = param3;
         var y:int = param4;
         ResourceManager.getResource(ClientConfig.getAppRes("dynamicClip/" + getClipPath(refId)),function(param1:DisplayObject):void
         {
            param1.x = x;
            param1.y = y;
            if(null != parent)
            {
               parent.addChild(param1);
            }
         });
      }
      
      public static function openTtargetApp(param1:int) : void
      {
         var str:String = null;
         var targetId:int = param1;
         var targetInfo:TargetInfo = _targets.getValue(targetId) as TargetInfo;
         str = targetInfo.target;
         if(targetInfo.goMapId != 0)
         {
            MapManager.changeMapWithCallback(targetInfo.goMapId,function():void
            {
               open(str);
            });
         }
         else
         {
            open(str);
         }
      }
      
      public static function invoke(param1:int) : void
      {
         open(getTarget(param1));
      }
      
      public static function tiaoDaAnTiao() : void
      {
         open(getTarget(1));
      }
      
      public static function open(param1:String) : void
      {
         var _loc2_:int = 0;
         if(null == param1 || param1.length <= 0)
         {
            return;
         }
         if(isInt(param1))
         {
            _loc2_ = parseInt(param1);
            if(_loc2_ <= 10000 || _loc2_ >= 50000)
            {
               MapManager.changeMap(_loc2_);
            }
            else
            {
               MapManager.changeLocalMap(_loc2_);
            }
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getModule(param1));
         }
      }
      
      private static function getTargetId(param1:int) : String
      {
         return (_refs.getValue(param1.toString()) as RefInfo).target;
      }
      
      private static function getClipPath(param1:int) : String
      {
         return (_refs.getValue(param1.toString()) as RefInfo).clipPath;
      }
      
      private static function getTarget(param1:int) : String
      {
         var _loc2_:String = getTargetId(param1);
         return (_targets.getValue(_loc2_) as TargetInfo).target;
      }
      
      private static function isInt(param1:String) : Boolean
      {
         return !isNaN(parseInt(param1));
      }
   }
}

class TargetInfo
{
    
   
   public var target:String;
   
   public var id:String;
   
   public var goMapId:int;
   
   public function TargetInfo()
   {
      super();
   }
}

class RefInfo
{
    
   
   public var clipPath:String;
   
   public var target:String;
   
   public var id:String;
   
   public function RefInfo()
   {
      super();
   }
}
