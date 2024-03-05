package com.robot.core.config.xml
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.XMLEvent;
   import com.robot.core.net.XMLLoader;
   
   public class PeakJihadWinnerInfo
   {
      
      private static var _hander:Function;
      
      private static var _loader:XMLLoader;
      
      private static var _xml:XML;
      
      private static var _xmlList:XMLList;
      
      private static var _weaken:Array;
      
      private static var _winnerArr:Array;
       
      
      public function PeakJihadWinnerInfo()
      {
         super();
      }
      
      public static function setup(param1:Function = null) : void
      {
         _hander = param1;
         if(_xml != null && _xmlList.length() > 0)
         {
            _hander();
         }
         else
         {
            _loader = new XMLLoader();
            _loader.addEventListener(XMLEvent.COMPLETE,onLoadXMLComplete);
            _loader.load(ClientConfig.getResPath("xml/PeakJihadWinner.xml"));
         }
      }
      
      protected static function onLoadXMLComplete(param1:XMLEvent) : void
      {
         _xml = XML(param1.data);
         _xmlList = _xml.player;
         _loader.removeEventListener(XMLEvent.COMPLETE,onLoadXMLComplete);
         _loader = null;
         initWinner();
      }
      
      private static function initWinner() : void
      {
         var _loc1_:String = null;
         var _loc2_:Array = null;
         var _loc3_:Array = null;
         var _loc4_:* = undefined;
         var _loc5_:int = 0;
         _winnerArr = [];
         for each(_loc4_ in _xmlList)
         {
            _loc1_ = String(_loc4_.toString());
            _loc2_ = _loc1_.split(",");
            _loc3_ = [];
            _loc5_ = 0;
            while(_loc5_ < _loc2_.length)
            {
               _loc3_.push(int(_loc2_[_loc5_]));
               _loc5_++;
            }
            _winnerArr[int(_loc4_.@level)] = _loc3_;
         }
         if(_hander != null)
         {
            _hander();
         }
      }
      
      public static function checkWinner(param1:int) : int
      {
         var _loc2_:Array = [];
         var _loc3_:int = 1;
         while(_loc3_ < _winnerArr.length)
         {
            _loc2_ = _winnerArr[_loc3_];
            if(_loc2_.indexOf(param1) != -1)
            {
               return _loc3_;
            }
            _loc3_++;
         }
         return 0;
      }
   }
}
