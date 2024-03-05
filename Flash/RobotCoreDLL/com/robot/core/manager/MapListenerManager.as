package com.robot.core.manager
{
   import com.robot.core.event.MapEvent;
   import flash.display.InteractiveObject;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.utils.Dictionary;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapListenerManager
   {
      
      private static var _dic:Dictionary = new Dictionary();
      
      {
         setup();
      }
      
      public function MapListenerManager()
      {
         super();
      }
      
      private static function setup() : void
      {
         MapManager.addEventListener(MapEvent.MAP_DESTROY,onDestroy);
      }
      
      public static function add(param1:InteractiveObject, param2:Function = null, param3:String = null) : void
      {
         if(param1)
         {
            if(param1 is Sprite)
            {
               (param1 as Sprite).buttonMode = true;
               (param1 as Sprite).mouseChildren = false;
            }
            if(param2 != null)
            {
               if(param1.hasEventListener(MouseEvent.CLICK))
               {
                  if(_dic[param1] != null)
                  {
                     param1.removeEventListener(MouseEvent.CLICK,_dic[param1]);
                  }
               }
               param1.addEventListener(MouseEvent.CLICK,param2);
            }
            if(param3 != null && param3 != "")
            {
               ToolTipManager.add(param1,param3);
            }
            _dic[param1] = param2;
         }
      }
      
      public static function remove(param1:InteractiveObject, param2:Boolean = true) : void
      {
         removeListener(param1,param2);
         delete _dic[param1];
      }
      
      private static function onDestroy(param1:MapEvent) : void
      {
         var _loc2_:* = undefined;
         for(_loc2_ in _dic)
         {
            removeListener(_loc2_);
         }
         _dic = new Dictionary();
      }
      
      private static function removeListener(param1:InteractiveObject, param2:Boolean = true) : void
      {
         if(param2)
         {
            DisplayUtil.removeForParent(param1,param2);
         }
         if(_dic[param1] != null)
         {
            param1.removeEventListener(MouseEvent.CLICK,_dic[param1]);
         }
         ToolTipManager.remove(param1);
      }
   }
}
