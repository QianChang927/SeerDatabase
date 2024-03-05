package com.robot.core.skeleton
{
   import com.robot.core.config.xml.ClothXMLInfo;
   import com.robot.core.info.item.ClothData;
   import com.robot.core.manager.UIManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.mode.ISkeletonSprite;
   import com.robot.core.utils.Direction;
   import flash.display.MovieClip;
   
   public class SkeletonClothPreview extends ClothPreview
   {
      
      public static var FLAG_CLOTH:String = "cloth";
       
      
      private var defaultCloth:MovieClip;
      
      public function SkeletonClothPreview(param1:MovieClip, param2:ISkeletonSprite = null)
      {
         super(param1,param2);
      }
      
      override protected function getFlagArray() : Array
      {
         return new Array(FLAG_TOP,FLAG_HEAD,FLAG_EYE,FLAG_HAND,FLAG_HAND_1,FLAG_WAIST,FLAG_DECORATOR,FLAG_FOOT,FLAG_BG,FLAG_CLOTH);
      }
      
      public function changeDefaultCloth() : void
      {
         this.defaultCloth = UIManager.getMovieClip("defaultCloth");
         var _loc1_:ChangeClothAction = changeClothActObj[FLAG_CLOTH];
         _loc1_.addChildCloth(this.defaultCloth,composeMC[FLAG_CLOTH]);
      }
      
      public function play() : void
      {
         var _loc2_:ChangeClothAction = null;
         var _loc3_:MovieClip = null;
         var _loc4_:MovieClip = null;
         var _loc1_:MovieClip = colorMC.getChildAt(0) as MovieClip;
         if(_loc1_)
         {
            _loc1_.gotoAndPlay(2);
         }
         if(doodleMC.numChildren > 0)
         {
            _loc3_ = doodleMC.getChildAt(0) as MovieClip;
            if(_loc3_)
            {
               if(_loc4_ = _loc3_.getChildAt(0) as MovieClip)
               {
                  _loc4_.gotoAndPlay(2);
               }
            }
         }
         for each(_loc2_ in changeClothActObj)
         {
            _loc2_.goStart();
         }
      }
      
      public function stop() : void
      {
         var _loc2_:ChangeClothAction = null;
         var _loc3_:MovieClip = null;
         var _loc4_:MovieClip = null;
         if(colorMC.numChildren == 0)
         {
            return;
         }
         var _loc1_:MovieClip = colorMC.getChildAt(0) as MovieClip;
         if(_loc1_)
         {
            _loc1_.gotoAndStop(1);
         }
         if(doodleMC.numChildren > 0)
         {
            _loc3_ = doodleMC.getChildAt(0) as MovieClip;
            if(_loc3_)
            {
               if(_loc4_ = _loc3_.getChildAt(0) as MovieClip)
               {
                  _loc4_.gotoAndStop(1);
               }
            }
         }
         for each(_loc2_ in changeClothActObj)
         {
            _loc2_.goOver();
         }
      }
      
      public function onEnterFrame() : void
      {
         var _loc2_:ChangeClothAction = null;
         var _loc3_:MovieClip = null;
         var _loc4_:MovieClip = null;
         var _loc1_:MovieClip = colorMC.getChildAt(0) as MovieClip;
         if(_loc1_)
         {
            if(_loc1_.currentFrame == 1)
            {
               _loc1_.gotoAndPlay(2);
            }
         }
         if(doodleMC.numChildren > 0)
         {
            _loc3_ = doodleMC.getChildAt(0) as MovieClip;
            if(_loc3_)
            {
               if(_loc4_ = _loc3_.getChildAt(0) as MovieClip)
               {
                  if(_loc4_.currentFrame == 1)
                  {
                     _loc4_.gotoAndPlay(2);
                  }
               }
            }
         }
         for each(_loc2_ in changeClothActObj)
         {
            _loc2_.goEnterFrame();
         }
      }
      
      override public function changeCloth(param1:Array) : void
      {
         super.changeCloth(param1);
         colorMC.gotoAndStop(people.direction);
         this.defaultCloth.gotoAndStop(people.direction);
      }
      
      public function changeDirection(param1:String) : void
      {
         var _loc2_:ChangeClothAction = null;
         var _loc3_:MovieClip = null;
         colorMC.gotoAndStop(param1);
         if(doodleMC.numChildren > 0)
         {
            _loc3_ = doodleMC.getChildAt(0) as MovieClip;
            if(_loc3_)
            {
               _loc3_.gotoAndStop(param1);
            }
         }
         for each(_loc2_ in changeClothActObj)
         {
            _loc2_.changeDir(param1);
         }
      }
      
      public function specialAction(param1:BasePeoleModel, param2:int) : void
      {
         var _loc5_:String = null;
         var _loc6_:ChangeClothAction = null;
         var _loc7_:ChangeClothAction = null;
         var _loc3_:ClothData = ClothXMLInfo.getItemInfo(param2);
         var _loc4_:int;
         if((_loc4_ = _loc3_.actionDir) != -1)
         {
            _loc5_ = _loc3_.type;
            people.direction = Direction.indexToStr(_loc4_);
            (_loc6_ = changeClothActObj[_loc5_]).specialAction(param1,param2,false);
         }
         else
         {
            colorMC.gotoAndStop(BasePeoleModel.SPECIAL_ACTION);
            for each(_loc7_ in changeClothActObj)
            {
               _loc7_.specialAction(param1,param2);
            }
         }
      }
   }
}
