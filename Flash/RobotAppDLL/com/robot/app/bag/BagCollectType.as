package com.robot.app.bag
{
   public class BagCollectType
   {
      
      public static const ALL:int = 0;
      
      public static const MINERAL:int = 1;
      
      public static const JINGYUAN:int = 2;
      
      public static const MINERAL_RAG:Array = [[400001,400050]];
      
      public static const JINGYUAN_RAG:Array = [[400101,400650],[1500001,1506500]];
      
      public static var currType:int = ALL;
      
      public static var typeNameList:Array = ["全部","矿石","精元"];
       
      
      public function BagCollectType()
      {
         super();
      }
   }
}
