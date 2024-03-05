package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class TrainingAskTwoXMLnfo
   {
      
      private static var xmlClass:Class = TrainingAskTwoXMLnfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      private static var xl:XMLList;
      
      private static var _askDes:Array = [];
      
      private static var _word1:Array = [];
      
      private static var _word2:Array = [];
      
      private static var _word3:Array = [];
      
      {
         setup();
      }
      
      public function TrainingAskTwoXMLnfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         _dataMap = new HashMap();
         xl = XML(new xmlClass()).elements("trainingAsk");
         for each(_loc1_ in xl)
         {
            _askDes.push(String(_loc1_.@askDes));
            _word1.push(String(_loc1_.@Word1));
            _word2.push(String(_loc1_.@Word2));
            _word3.push(String(_loc1_.@Word3));
         }
      }
      
      public static function get _AskDes() : Array
      {
         return _askDes;
      }
      
      public static function get _Word1() : Array
      {
         return _word1;
      }
      
      public static function get _Word2() : Array
      {
         return _word2;
      }
      
      public static function get _Word3() : Array
      {
         return _word3;
      }
   }
}
