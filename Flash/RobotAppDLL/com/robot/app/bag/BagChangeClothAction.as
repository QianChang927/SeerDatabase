package com.robot.app.bag
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ClothXMLInfo;
   import com.robot.core.info.clothInfo.PeopleItemInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.mode.ISkeletonSprite;
   import com.robot.core.skeleton.ChangeClothAction;
   import com.robot.core.skeleton.ClothPreview;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.events.DynamicEvent;
   
   public class BagChangeClothAction extends ChangeClothAction
   {
      
      public static const TAKE_OFF_CLOTH:String = "takeOffCloth";
      
      public static const REPLACE_CLOTH:String = "replaceCloth";
      
      public static const USE_CLOTH:String = "useCloth";
      
      public static const CLOTH_CHANGE:String = "bagClothChange";
      
      public static const CLICK_CLOTH:String = "clickCloth";
       
      
      public function BagChangeClothAction(param1:ISkeletonSprite, param2:Sprite, param3:String, param4:uint)
      {
         super(param1,param2,param3,param4);
      }
      
      override protected function unloadCloth(param1:MouseEvent) : void
      {
         var _loc2_:uint = 0;
         if(clothID == ClothXMLInfo.DEFAULT_FOOT || clothID == ClothXMLInfo.DEFAULT_HEAD || clothID == ClothXMLInfo.DEFAULT_WAIST)
         {
            return;
         }
         if(clothSWF)
         {
            clothSWF.parent.removeChild(clothSWF);
            clothSWF = null;
            MainManager.actorModel.dispatchEvent(new DynamicEvent(BagChangeClothAction.TAKE_OFF_CLOTH,clothID));
            clothID = 0;
            MainManager.actorModel.dispatchEvent(new Event(BagChangeClothAction.CLOTH_CHANGE));
         }
         if(type == ClothPreview.FLAG_HEAD)
         {
            _loc2_ = uint(ClothXMLInfo.DEFAULT_HEAD);
         }
         else if(type == ClothPreview.FLAG_FOOT)
         {
            _loc2_ = uint(ClothXMLInfo.DEFAULT_FOOT);
         }
         else
         {
            if(type != ClothPreview.FLAG_WAIST)
            {
               return;
            }
            _loc2_ = uint(ClothXMLInfo.DEFAULT_WAIST);
         }
         this.changeClothByPath(_loc2_,ClientConfig.getClothPrevPath(_loc2_));
      }
      
      override public function changeCloth(param1:PeopleItemInfo, param2:uint = 0) : void
      {
         if(this.clothID != 0 && this.clothID != ClothXMLInfo.DEFAULT_FOOT && this.clothID != ClothXMLInfo.DEFAULT_HEAD && this.clothID != ClothXMLInfo.DEFAULT_WAIST)
         {
            if(MainManager.actorModel)
            {
               MainManager.actorModel.dispatchEvent(new DynamicEvent(REPLACE_CLOTH,this.clothID));
            }
         }
         else if(MainManager.actorModel)
         {
            MainManager.actorModel.dispatchEvent(new DynamicEvent(USE_CLOTH,this.clothID));
         }
         this.clothID = param1.id;
         beginLoad();
         if(MainManager.actorModel)
         {
            MainManager.actorModel.dispatchEvent(new Event(BagChangeClothAction.CLOTH_CHANGE));
         }
      }
      
      override public function changeClothByPath(param1:int, param2:String) : void
      {
         if(param1 != ClothXMLInfo.DEFAULT_FOOT && param1 != ClothXMLInfo.DEFAULT_HEAD && param1 != ClothXMLInfo.DEFAULT_WAIST)
         {
            if(this.clothID != 0 && this.clothID != ClothXMLInfo.DEFAULT_FOOT && this.clothID != ClothXMLInfo.DEFAULT_HEAD && this.clothID != ClothXMLInfo.DEFAULT_WAIST)
            {
               if(MainManager.actorModel)
               {
                  MainManager.actorModel.dispatchEvent(new DynamicEvent(REPLACE_CLOTH,this.clothID));
               }
            }
            else if(MainManager.actorModel)
            {
               MainManager.actorModel.dispatchEvent(new DynamicEvent(USE_CLOTH,this.clothID));
            }
         }
         this.clothID = param1;
         beginLoad(param2);
         if(MainManager.actorModel)
         {
            MainManager.actorModel.dispatchEvent(new Event(BagChangeClothAction.CLOTH_CHANGE));
         }
      }
   }
}
