package com.robot.app2.systems
{
   import com.robot.core.newloader.SeerUrlLoader;
   import com.robot.core.zip.PreloadZipXMLController;
   import flash.utils.Dictionary;
   import org.taomee.bean.BaseBean;
   
   public class BossEffectIconControl extends BaseBean
   {
      
      private static var allEffects:Dictionary = new Dictionary();
       
      
      private var configXml:XML;
      
      public function BossEffectIconControl()
      {
         super();
      }
      
      public static function getIconId(param1:int = 0, param2:String = "") : int
      {
         var _loc3_:String = "";
         if(param1 > 0)
         {
            _loc3_ += "" + param1;
         }
         if(param2 != "")
         {
            _loc3_ += "_" + param2;
         }
         var _loc4_:Object = allEffects[_loc3_];
         if(null != _loc4_)
         {
            return _loc4_["iconId"];
         }
         return -1;
      }
      
      public static function getTips(param1:int = 0, param2:String = "") : String
      {
         var _loc3_:String = "";
         if(param1 > 0)
         {
            _loc3_ += "" + param1;
         }
         if(param2 != "")
         {
            _loc3_ += "_" + param2;
         }
         var _loc4_:Object = allEffects[_loc3_];
         if(null != _loc4_)
         {
            return _loc4_["tips"];
         }
         return "";
      }
      
      public static function getSort(param1:int = 0, param2:String = "") : int
      {
         var _loc3_:String = "";
         if(param1 > 0)
         {
            _loc3_ += "" + param1;
         }
         if(param2 != "")
         {
            _loc3_ += "_" + param2;
         }
         var _loc4_:Object = allEffects[_loc3_];
         if(null != _loc4_)
         {
            return _loc4_["sort"];
         }
         return -1;
      }
      
      public static function getRows(param1:int = 0, param2:String = "") : int
      {
         var _loc3_:String = "";
         if(param1 > 0)
         {
            _loc3_ += "" + param1;
         }
         if(param2 != "")
         {
            _loc3_ += "_" + param2;
         }
         var _loc4_:Object = allEffects[_loc3_];
         if(null != _loc4_)
         {
            return _loc4_["rows"];
         }
         return -1;
      }
      
      override public function start() : void
      {
         var loader:SeerUrlLoader = new SeerUrlLoader("加载场景配置文件");
         var url:String = "xml/bossEffectIcon.xml";
         PreloadZipXMLController.getXML("bossEffectIcon.xml",function(param1:*):void
         {
            configXml = new XML(param1);
            setUp();
         });
         finish();
      }
      
      public function setUp() : void
      {
         var _loc2_:XML = null;
         var _loc3_:int = 0;
         var _loc4_:String = null;
         var _loc5_:int = 0;
         var _loc6_:String = null;
         var _loc7_:int = 0;
         var _loc8_:int = 0;
         var _loc9_:String = null;
         var _loc10_:Object = null;
         var _loc1_:XMLList = this.configXml.elements("bossEffect");
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = int(_loc2_.@iconId);
            _loc4_ = String(_loc2_.@tips);
            _loc5_ = int(_loc2_.@Eid);
            _loc6_ = String(_loc2_.@Args);
            _loc7_ = int(_loc2_.@sort);
            _loc8_ = int(_loc2_.@rows);
            _loc9_ = "";
            if(_loc5_ > 0)
            {
               _loc9_ += "" + _loc5_;
            }
            if(_loc6_ != "")
            {
               _loc9_ += "_" + _loc6_;
            }
            _loc10_ = {
               "iconId":_loc3_,
               "tips":_loc4_,
               "sort":_loc7_,
               "rows":_loc8_
            };
            allEffects[_loc9_] = _loc10_;
         }
      }
   }
}
