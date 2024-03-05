package com.robot.core.info.userItem
{
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.utils.ItemType;
   import flash.utils.IDataInput;
   
   public class SingleItemInfo
   {
       
      
      private var _itemID:uint;
      
      private var _itemLevel:uint;
      
      public var type:uint;
      
      public var itemNum:uint;
      
      public var leftTime:uint;
      
      public var updateTime:uint;
      
      public var rarity:uint;
      
      private var petArray:Array;
      
      private var virtualArray:Array;
      
      public function SingleItemInfo(param1:IDataInput = null, param2:Boolean = true)
      {
         this.petArray = [1500008,1500045,1500071,1500076,1500078,1500080,1500081,1500084,1500228,1500257,1500345,1500340,1500315,1500242,1500230,1500204,1500286,400127,400133,400152,400158,400159,400207,400215,400230,400240,400281,400293,400295,400303,400324,400338,400415,400426,400438,400439,400457,400478,400481,1709076,1709077,1709078,1709079,1709080,1709081,1709082,1709083,1709084,1709085,1709086,1709087,1709088,1709089,1709090,1709091,1709092,1709093,1709094,1709095,1710550,1710551,1710552,1710553,1710554,1710555,1713276,1713277,1713278,1713279,1713280,1713281,1713282,1713283,1723634,1723635];
         this.virtualArray = [1400352,1400151];
         super();
         if(param1)
         {
            this.itemID = param1.readUnsignedInt();
            this.itemNum = param1.readUnsignedInt();
            this.leftTime = param1.readUnsignedInt();
            this._itemLevel = param1.readUnsignedInt();
            if(param2)
            {
               this.updateTime = param1.readUnsignedInt();
            }
         }
      }
      
      public function set itemID(param1:uint) : void
      {
         this._itemID = param1;
         this.rarity = ItemXMLInfo.getItemRarity(this._itemID);
         if(this.petArray.indexOf(this._itemID) >= 0)
         {
            this.type = ItemType.PET_ITEM;
         }
         else if(this._itemID > 10000 && this._itemID < 100000)
         {
            this.type = ItemType.COLLECTON;
         }
         else if(this._itemID >= 100001 && this._itemID <= 200000 || this._itemID >= 1300001 && this._itemID <= 1400000)
         {
            this.type = ItemType.CLOTH;
         }
         else if(this._itemID >= 200001 && this._itemID <= 300000 || this._itemID == 1 || this._itemID == 9 || this._itemID == 3)
         {
            this.type = ItemType.DOODLE;
         }
         else if(this._itemID >= 300001 && this._itemID <= 400000 || ItemXMLInfo.getCatID(this._itemID) == 16)
         {
            this.type = ItemType.PET_PROPERTY;
         }
         else if(this._itemID >= 400001 && this._itemID <= 500000 || this._itemID >= 1200001 && this._itemID <= 1300000 || this._itemID >= 1500001 && this._itemID <= 1506500)
         {
            this.type = ItemType.COLLECTON;
         }
         else if(this._itemID >= 500001 && this._itemID <= 600000)
         {
            this.type = ItemType.FITMENT;
         }
         else if(this._itemID >= 1000001 && this._itemID <= 1100000)
         {
            this.type = ItemType.SOULBEAD;
         }
         else if(ItemXMLInfo.getCatID(this._itemID) == 17 || ItemXMLInfo.getCatID(this._itemID) == 6 || this.virtualArray.indexOf(this._itemID) >= 0)
         {
            this.type = ItemType.COLLECTON;
         }
         else if(ItemXMLInfo.getCatID(this._itemID) == 18)
         {
            this.type = ItemType.GEM_ITEM;
         }
         else if(ItemXMLInfo.getCatID(this._itemID) == 19)
         {
            this.type = ItemType.GEM_ASSIST_ITEM;
         }
         else if([20,21].indexOf(ItemXMLInfo.getCatID(this._itemID)) != -1)
         {
            this.type = ItemType.COLLECTON;
         }
         else if(ItemXMLInfo.getCatID(this._itemID) == 23)
         {
            this.type = ItemType.GIFT;
         }
         else if(ItemXMLInfo.getCatID(this._itemID) == 14)
         {
            this.type = ItemType.GIFT;
         }
         else if(ItemXMLInfo.getCatID(this._itemID) == 24)
         {
            this.type = ItemType.PET_PROPERTY;
         }
         else if(ItemXMLInfo.getCatID(this._itemID) == 25)
         {
            this.type = ItemType.LIMIT_TIME_ITEM;
         }
         else if(ItemXMLInfo.getCatID(this._itemID) == 26)
         {
            this.type = ItemType.GIFT;
         }
         else if(this._itemID == 5 || this._itemID == 11)
         {
            this.type = ItemType.TYPE_ALL;
         }
         else
         {
            this.type = ItemType.SUIT;
         }
      }
      
      public function get itemID() : uint
      {
         return this._itemID;
      }
      
      public function get itemLevel() : uint
      {
         return this._itemLevel;
      }
   }
}
