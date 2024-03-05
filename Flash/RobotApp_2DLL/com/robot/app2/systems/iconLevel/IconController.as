package com.robot.app2.systems.iconLevel
{
   import com.robot.core.controller.RedSystemController;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.newloader.SeerUrlLoader;
   import com.robot.core.zip.PreloadZipXMLController;
   import flash.events.Event;
   import org.taomee.bean.BaseBean;
   import org.taomee.ds.HashMap;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ToolTipManager;
   
   public class IconController extends BaseBean
   {
      
      public static var configXml:XML;
      
      private static var _iconMap:HashMap;
       
      
      public function IconController()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:IconView = null;
         var _loc4_:XMLList = null;
         var _loc5_:XML = null;
         var _loc6_:IconView = null;
         EventManager.addEventListener(RedSystemController.RED_UPDATED,redUpdatedHandle);
         var _loc1_:XMLList = configXml.elements("icon");
         _iconMap = new HashMap();
         for each(_loc2_ in _loc1_)
         {
            if(Boolean(_loc2_.elements("subicon")) && _loc2_.elements("subicon").length() > 0)
            {
               _loc3_ = new GroupIconView(_loc2_.@direction,_loc2_.@priority,_loc2_.@exMapList,_loc2_.@ui,_loc2_.@tips,_loc2_.@iconTxt,_loc2_.@mouseClickFunc,_loc2_.@initfunc,_loc2_.@time,0,int(_loc2_.@shownewseer));
               _loc4_ = _loc2_.elements("subicon");
               for each(_loc5_ in _loc4_)
               {
                  _loc6_ = new IconView(_loc5_.@direction,_loc5_.@priority,_loc5_.@exMapList,_loc5_.@ui,_loc5_.@tips,_loc5_.@iconTxt,_loc5_.@mouseClickFunc,_loc5_.@initfunc,_loc5_.@time,1,int(_loc2_.@shownewseer));
                  GroupIconView(_loc3_).addSubIcon(_loc6_);
               }
            }
            else
            {
               _loc3_ = new IconView(_loc2_.@direction,_loc2_.@priority,_loc2_.@exMapList,_loc2_.@ui,_loc2_.@tips,_loc2_.@iconTxt,_loc2_.@mouseClickFunc,_loc2_.@initfunc,_loc2_.@time,0,int(_loc2_.@shownewseer));
            }
            _iconMap.add(_loc3_.url,_loc3_);
            _loc3_.addToIconLevel();
         }
         EventManager.dispatchEvent(new Event("allIconParsed"));
         RedSystemController.instance.updateAllRed();
      }
      
      private static function redUpdatedHandle(param1:Event) : void
      {
         var _loc4_:IconView = null;
         var _loc5_:IconView = null;
         var _loc2_:Array = _iconMap.getValues();
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_.length)
         {
            if(_loc4_ = _loc2_[_loc3_])
            {
               _loc4_.checkRed();
            }
            else if((_loc5_ = _loc2_[_loc3_]) is GroupIconView)
            {
               GroupIconView(_loc5_).checkRed();
            }
            _loc3_++;
         }
      }
      
      public static function showIcon(param1:String) : void
      {
         var _loc3_:Array = null;
         var _loc4_:int = 0;
         var _loc5_:IconView = null;
         var _loc2_:IconView = _iconMap.getValue(param1);
         if(_loc2_)
         {
            _loc2_.addToIconLevel();
         }
         else
         {
            _loc3_ = _iconMap.getValues();
            _loc4_ = 0;
            while(_loc4_ < _loc3_.length)
            {
               if((_loc5_ = _loc3_[_loc4_]) is GroupIconView)
               {
                  if(GroupIconView(_loc5_).addRemovedIcon(param1) > 0)
                  {
                     break;
                  }
               }
               _loc4_++;
            }
         }
      }
      
      public static function hideIcon(param1:String) : void
      {
         var _loc3_:Array = null;
         var _loc4_:int = 0;
         var _loc5_:IconView = null;
         var _loc2_:IconView = _iconMap.getValue(param1);
         if(_loc2_)
         {
            _loc2_.removeFromIconLevel();
         }
         else
         {
            _loc3_ = _iconMap.getValues();
            _loc4_ = 0;
            while(_loc4_ < _loc3_.length)
            {
               if((_loc5_ = _loc3_[_loc4_]) is GroupIconView)
               {
                  if(GroupIconView(_loc5_).removeSubIcon(param1) > 0)
                  {
                     break;
                  }
               }
               _loc4_++;
            }
         }
      }
      
      public static function changeIconTips(param1:String, param2:String) : void
      {
         var _loc3_:IconView = _iconMap.getValue(param1);
         if(_loc3_)
         {
            _loc3_.tips = param2;
            ToolTipManager.remove(_loc3_.ui);
            ToolTipManager.add(_loc3_.ui,param2);
         }
      }
      
      public static function hideIconsOfDirection(param1:String) : void
      {
         var _loc2_:IconView = null;
         for each(_loc2_ in iconViewArr)
         {
            if(_loc2_.direction == param1 && _loc2_.ui != null)
            {
               _loc2_.removeFromIconLevel();
            }
         }
      }
      
      public static function showIconsOfDirection(param1:String) : void
      {
         var _loc2_:IconView = null;
         for each(_loc2_ in iconViewArr)
         {
            if(_loc2_.direction == param1)
            {
               _loc2_.addToIconLevel();
            }
         }
      }
      
      public static function eachIcon(param1:Function) : void
      {
         var _loc2_:IconView = null;
         for each(_loc2_ in iconViewArr)
         {
            param1(_loc2_);
         }
      }
      
      public static function get iconViewArr() : Array
      {
         return _iconMap.getValues();
      }
      
      override public function start() : void
      {
         var url:String = null;
         var loader:SeerUrlLoader = new SeerUrlLoader("加载ICON配置文件");
         var sysdate:Date = SystemTimerManager.sysBJDate;
         url = "icon_config" + SystemTimerManager.splitVersionStr() + ".xml";
         PreloadZipXMLController.getXML(url,function(param1:*):void
         {
            configXml = new XML(param1);
            setup();
            finish();
         });
      }
   }
}
