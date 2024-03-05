package com.robot.core.config.xmlInfo
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.newloader.SeerUrlLoader;
   import org.taomee.ds.HashMap;
   
   public class LanternRiddles2017XMLInfo
   {
      
      public static var configXml:XML;
      
      private static var _fun:Function;
      
      private static var _itemHash:HashMap = new HashMap();
       
      
      public function LanternRiddles2017XMLInfo()
      {
         super();
      }
      
      public static function setup(param1:Function) : void
      {
         var seerUrlLoader:SeerUrlLoader = null;
         var fun:Function = param1;
         _fun = fun;
         seerUrlLoader = new SeerUrlLoader("加载2017元宵节灯谜规则");
         var url:String = "xml/lanternRiddles_config.xml";
         seerUrlLoader.doLoad(ClientConfig.getResPath(url),function(param1:*):void
         {
            var _loc3_:XML = null;
            configXml = XML(param1);
            var _loc2_:XMLList = configXml.elements("item");
            for each(_loc3_ in _loc2_)
            {
               _itemHash.add(uint(_loc3_.@num),_loc3_);
            }
            seerUrlLoader.clear();
            if(null != _fun)
            {
               _fun();
            }
         });
      }
      
      public static function getQuestionByNum(param1:int) : String
      {
         var _loc2_:String = "";
         var _loc3_:XML = _itemHash.getValue(param1);
         return _loc3_ != null ? _loc3_.@question : "null";
      }
      
      public static function getAnswersByNum(param1:int) : Array
      {
         var _loc2_:Array = [];
         var _loc3_:XML = _itemHash.getValue(param1);
         _loc2_[0] = _loc3_ != null ? _loc3_.@answerA : "null";
         _loc2_[1] = _loc3_ != null ? _loc3_.@answerB : "null";
         _loc2_[2] = _loc3_ != null ? _loc3_.@answerC : "null";
         _loc2_[3] = _loc3_ != null ? _loc3_.@answerD : "null";
         return _loc2_;
      }
      
      public static function getrightIndexByNum(param1:int) : int
      {
         var _loc2_:int = 0;
         var _loc3_:XML = _itemHash.getValue(param1);
         return _loc3_ != null ? int(_loc3_.@rightIndex) : 0;
      }
   }
}
