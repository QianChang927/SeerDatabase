package com.robot.core.info.skillEffectInfo
{
   import com.robot.core.manager.MainManager;
   import com.robot.core.newloader.SeerUrlLoader;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.zip.PreloadZipXMLController;
   import flash.system.ApplicationDomain;
   import flash.utils.Dictionary;
   import flash.utils.getDefinitionByName;
   import org.taomee.ds.HashMap;
   
   public class EffectInfoManager
   {
      
      private static var hashMap:HashMap = new HashMap();
      
      private static var _effects:Dictionary = new Dictionary();
      
      private static var _effectsType:Dictionary = new Dictionary();
       
      
      public function EffectInfoManager()
      {
         super();
      }
      
      public static function setup() : void
      {
         var loader:SeerUrlLoader = new SeerUrlLoader("加载技能描述文件");
         var url:String = "xml/effectInfo.xml";
         PreloadZipXMLController.getXML("effectInfo.xml",function(param1:*):void
         {
            var _loc2_:XML = new XML(param1);
            parseEffect(_loc2_);
         });
      }
      
      private static function parseEffect(param1:XML) : void
      {
         var _loc3_:XML = null;
         var _loc4_:XMLList = null;
         var _loc5_:XML = null;
         var _loc6_:int = 0;
         var _loc2_:XMLList = param1.elements("Effect");
         for each(_loc3_ in _loc2_)
         {
            _effects[int(_loc3_.@id)] = _loc3_;
         }
         _loc4_ = param1.elements("ParamType");
         for each(_loc5_ in _loc4_)
         {
            _loc6_ = int(_loc5_.@id);
            _effectsType[_loc6_] = String(_loc5_.@params).split("|");
         }
      }
      
      public static function getEffectParamType(param1:int) : Array
      {
         return _effectsType[param1].slice();
      }
      
      public static function getArgsNum(param1:uint) : uint
      {
         if(null == getEffect(param1))
         {
            Alarm2.show("effectInfo.xml 中 没有 sideeffectid" + param1);
            return 0;
         }
         return getEffect(param1).argsNum;
      }
      
      public static function getInfo(param1:uint, param2:Array) : String
      {
         return getEffect(param1).getInfo(param2);
      }
      
      private static function getEffect(param1:uint) : AbstractEffectInfo
      {
         var _loc2_:AbstractEffectInfo = null;
         var _loc3_:XML = null;
         var _loc4_:* = undefined;
         if(hashMap.getValue(param1))
         {
            _loc2_ = hashMap.getValue(param1);
         }
         else
         {
            if(_effects[param1])
            {
               _loc3_ = _effects[param1];
               _loc2_ = new EffectInfo(int(_loc3_.@argsNum),_loc3_.@info,_loc3_.@param);
            }
            else if(ApplicationDomain.currentDomain.hasDefinition("com.robot.core.info.skillEffectInfo.Effect_" + param1))
            {
               _loc2_ = new (_loc4_ = getDefinitionByName("com.robot.core.info.skillEffectInfo.Effect_" + param1))() as AbstractEffectInfo;
            }
            else if(MainManager.isDebug)
            {
               Alarm2.show("未找到EffectInfo！");
            }
            hashMap.add(param1,_loc2_);
         }
         return _loc2_;
      }
   }
}
