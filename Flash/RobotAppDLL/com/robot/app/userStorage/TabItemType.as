package com.robot.app.userStorage
{
   public class TabItemType
   {
      
      public static const COMMAN_ITEM:int = 0;
      
      public static const VIP_ITEM:int = 1;
      
      public static const MOUNT_ITEM:int = 2;
      
      public static const BG_ITEM:int = 3;
      
      public static const MONSTER_SEED_ITEM:int = 4;
      
      public static const SOUL_BEAD_ITEM:int = 5;
      
      public static const CLLECTION_ITEM:int = 6;
      
      public static const MOUNT_STR:String = "mount";
      
      public static const BG_STR:String = "bg";
      
      public static const MONSTER_SEED_RANK:Array = [[400101,400650],[1500001,1506500]];
      
      public static var ClothListTypes:Array = ["suit","eliteSuit","head","eye","hand","waist","foot"];
      
      public static var typeNameList:Array = ["全部","套装","精品套装","头部","脸部","手部","腰带","脚部","背景","星际座驾"];
      
      public static var typeNameListEn:Array = ["all","suit","eliteSuit","head","eye","hand","waist","foot","bg","mount"];
       
      
      public function TabItemType()
      {
         super();
      }
   }
}
