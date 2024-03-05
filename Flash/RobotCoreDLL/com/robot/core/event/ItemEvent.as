package com.robot.core.event
{
   import flash.events.Event;
   
   public class ItemEvent extends Event
   {
      
      public static const CLOTH_LIST:String = "clothList";
      
      public static const COLLECTION_LIST:String = "collectionList";
      
      public static const FIGHT_COLLECTION_LIST:String = "fightCollectionList";
      
      public static const THROW_LIST:String = "throwList";
      
      public static const PET_ITEM_LIST:String = "petItemList";
      
      public static const SUPER_ITEM_LIST:String = "superItemList";
      
      public static const SOULBEAD_ITEM_LIST:String = "soulbeadItemList";
      
      public static const SKILL_STONE_LIST:String = "skillStoneList";
      
      public static const COUNTERMARK_LIST:String = "countermarkList";
      
      public static const GEM_LIST:String = "gemList";
      
      public static const GEM_ASSIST_LIST:String = "gemAssistList";
      
      public static const GET_BOUNDS_SUCCESS:String = "get_bounds_success";
      
      public static const ICICLEGAME_SUCCESS:String = "iciclegame_success";
      
      public static const EXCHANGE_END:String = "exchange_end";
      
      public static const ITEM_IN_BAG_ALARM_CLICK:String = "itemInBagAlarmClick";
      
      public static const PET_IN_BAG_ALARM_CLICK:String = "petInBagAlarmClick";
      
      public static const CRYSTALCORE_LIST:String = "CrystalCoreList";
       
      
      private var _data:Object;
      
      public function ItemEvent(param1:String, param2:Object = null)
      {
         this._data = param2;
         super(param1,false,false);
      }
      
      public function get data() : Object
      {
         return this._data;
      }
   }
}
