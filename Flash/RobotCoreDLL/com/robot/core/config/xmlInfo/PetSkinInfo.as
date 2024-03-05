package com.robot.core.config.xmlInfo
{
   import com.robot.core.config.xml.PetXMLInfo;
   
   public class PetSkinInfo
   {
       
      
      public var id:int;
      
      public var name:String;
      
      public var monId:int;
      
      public var monIds:Array;
      
      public var target:int;
      
      public var occasion:int;
      
      public var addWay:int;
      
      public var attributes:Array;
      
      public var skinEffectID:int;
      
      public var skinEffectArgs:String;
      
      public var skinPetId:int;
      
      public var skinTypes:Array;
      
      public var shopId:int;
      
      public var type:int;
      
      public var go:String;
      
      public var goType:String;
      
      public function PetSkinInfo(param1:XML)
      {
         var _loc3_:XML = null;
         var _loc4_:Array = null;
         var _loc5_:int = 0;
         var _loc6_:PetSkinType = null;
         super();
         if(param1 == null)
         {
            return;
         }
         this.id = int(param1.@ID);
         this.name = String(param1.@Name);
         if(String(param1.@MonID).indexOf(" ") != -1)
         {
            _loc4_ = String(param1.@MonID).split(" ");
            this.monIds = new Array(_loc4_.length);
            _loc5_ = 0;
            while(_loc5_ < _loc4_.length)
            {
               this.monIds[_loc5_] = _loc4_[_loc5_];
               _loc5_++;
            }
         }
         else
         {
            this.monIds = null;
            this.monId = int(param1.@MonID);
         }
         this.target = int(param1.@Target);
         this.occasion = int(param1.@Occasion);
         this.addWay = int(param1.@AddWay);
         this.attributes = [];
         this.skinEffectID = int(param1.@SkinEffectID);
         this.skinEffectArgs = String(param1.@SkinEffectArgs);
         this.skinPetId = PetXMLInfo.getRealId(1400000 + this.id);
         this.shopId = int(param1.@ShopID);
         this.type = int(param1.@Type);
         this.go = param1.@Go;
         this.goType = param1.@GoType;
         var _loc2_:XMLList = param1.descendants("SkinKind");
         this.skinTypes = [];
         for each(_loc3_ in _loc2_)
         {
            (_loc6_ = new PetSkinType()).id = int(_loc3_.@ID);
            _loc6_.lifeTime = int(_loc3_.@LifeTime);
            _loc6_.type = int(_loc3_.@Type);
            this.skinTypes.push(_loc6_);
         }
      }
      
      public static function getPetDefaultSkin(param1:int) : PetSkinInfo
      {
         var _loc2_:PetSkinInfo = new PetSkinInfo(null);
         _loc2_.monId = param1;
         _loc2_.name = PetXMLInfo.getName(param1) + "";
         _loc2_.skinPetId = param1;
         return _loc2_;
      }
      
      public function getSkinType(param1:int) : PetSkinType
      {
         var _loc2_:int = 0;
         while(_loc2_ < this.skinTypes.length)
         {
            if(this.skinTypes[_loc2_].id == param1)
            {
               return this.skinTypes[_loc2_];
            }
            _loc2_++;
         }
         return null;
      }
   }
}
