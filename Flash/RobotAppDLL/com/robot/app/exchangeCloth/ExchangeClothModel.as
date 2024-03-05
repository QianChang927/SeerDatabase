package com.robot.app.exchangeCloth
{
   import com.robot.core.config.xml.ItemTipXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.ui.alert.Alarm;
   import flash.events.Event;
   
   public class ExchangeClothModel
   {
       
      
      private var xmlClass:Class;
      
      private var xml:XML;
      
      private var info_a:Array;
      
      public function ExchangeClothModel()
      {
         this.xmlClass = ExchangeClothModel_xmlClass;
         this.xml = XML(new this.xmlClass());
         super();
         ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,this.onList);
         ItemManager.getCollection();
      }
      
      private function getInfo() : void
      {
         var _loc2_:Object = null;
         var _loc1_:int = 0;
         while(_loc1_ < this.xml.item.length())
         {
            if(ItemManager.getCollectionInfo(uint(this.xml.item[_loc1_].@id)) != null)
            {
               _loc2_ = new Object();
               _loc2_.className = this.xml.item[_loc1_].@className;
               _loc2_.iconName = this.xml.item[_loc1_].@iconName;
               _loc2_.id = this.xml.item[_loc1_].@id;
               _loc2_.exName = this.xml.item[_loc1_].@exName;
               _loc2_.eName = ItemXMLInfo.getName(uint(_loc2_.id));
               _loc2_.des = ItemTipXMLInfo.getItemDes(uint(_loc2_.id));
               this.info_a.push(_loc2_);
            }
            _loc1_++;
         }
      }
      
      public function onList(param1:Event) : void
      {
         this.destroy();
         this.info_a = new Array();
         this.getInfo();
         if(this.info_a.length > 0)
         {
            ExchangeClothController.show(this.info_a);
         }
         else
         {
            Alarm.show("你还没有原材料打造装备，快去搜集吧!");
         }
      }
      
      public function destroy() : void
      {
         ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,this.onList);
      }
   }
}
