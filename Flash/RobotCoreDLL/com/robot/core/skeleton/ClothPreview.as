package com.robot.core.skeleton
{
   import com.robot.core.config.xml.ClothXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.clothInfo.PeopleItemInfo;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.mode.ISkeletonSprite;
   import com.robot.core.utils.Direction;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ClothPreview
   {
      
      public static const MODEL_PEOPLE:uint = 0;
      
      public static const MODEL_SHOW:uint = 1;
      
      public static const FLAG_TOP:String = "top";
      
      public static const FLAG_HEAD:String = "head";
      
      public static const FLAG_EYE:String = "eye";
      
      public static const FLAG_HAND:String = "hand";
      
      public static const FLAG_HAND_1:String = "hand1";
      
      public static const FLAG_WAIST:String = "waist";
      
      public static const FLAG_DECORATOR:String = "decorator";
      
      public static const FLAG_FOOT:String = "foot";
      
      public static const FLAG_BG:String = "bg";
      
      public static const FLAG_COLOR:String = "color";
      
      private static const downRenderOrder:Array = [FLAG_HAND_1,FLAG_HAND,FLAG_HEAD,FLAG_TOP,FLAG_EYE];
      
      private static const upRenderOrder:Array = [FLAG_HAND_1,FLAG_HAND,FLAG_EYE,FLAG_HEAD,FLAG_TOP];
      
      private static const rightRenderOrder:Array = [FLAG_HEAD,FLAG_TOP,FLAG_HAND_1,FLAG_HAND,FLAG_EYE];
      
      private static const rightdownRenderOrder:Array = [FLAG_HAND_1,FLAG_HEAD,FLAG_TOP,FLAG_HAND,FLAG_EYE];
      
      private static const rightupRenderOrder:Array = [FLAG_EYE,FLAG_HAND_1,FLAG_HEAD,FLAG_TOP,FLAG_HAND];
      
      private static const leftRenderOrder:Array = [FLAG_HEAD,FLAG_TOP,FLAG_HAND_1,FLAG_HAND,FLAG_EYE];
      
      private static const leftdownRenderOrder:Array = [FLAG_HAND,FLAG_HEAD,FLAG_TOP,FLAG_HAND_1,FLAG_EYE];
      
      private static const leftupRenderOrder:Array = [FLAG_EYE,FLAG_HAND,FLAG_HEAD,FLAG_TOP,FLAG_HAND_1];
       
      
      protected var skeletonMC:MovieClip;
      
      protected var composeMC:Sprite;
      
      protected var colorMC:MovieClip;
      
      protected var doodleMC:MovieClip;
      
      protected var people:ISkeletonSprite;
      
      protected var mcObj:Object;
      
      protected var changeClothActObj:Object;
      
      protected var flagArray:Array;
      
      protected var model:uint;
      
      public function ClothPreview(param1:Sprite, param2:ISkeletonSprite = null, param3:uint = 0, param4:Boolean = true)
      {
         var _loc5_:String = null;
         this.mcObj = {};
         this.changeClothActObj = {};
         super();
         this.model = param3;
         this.people = param2;
         this.flagArray = this.getFlagArray();
         if(!param4 && this.flagArray.indexOf(FLAG_BG) != -1)
         {
            this.flagArray.splice(this.flagArray.indexOf(FLAG_BG),1);
         }
         this.composeMC = param1;
         this.colorMC = this.composeMC[FLAG_COLOR];
         this.colorMC.gotoAndStop(1);
         this.doodleMC = this.composeMC[FLAG_DECORATOR];
         this.doodleMC.gotoAndStop(1);
         for each(_loc5_ in this.flagArray)
         {
            this.mcObj[_loc5_] = this.composeMC[_loc5_];
         }
         this.initChangeCloth();
      }
      
      public function getClothArray() : Array
      {
         var _loc3_:ChangeClothAction = null;
         var _loc1_:Array = [];
         var _loc2_:Array = new Array();
         for each(_loc3_ in this.changeClothActObj)
         {
            if(_loc3_.getClothID() > 0)
            {
               if(_loc2_.indexOf(_loc3_.getClothID()) == -1)
               {
                  _loc2_.push(_loc3_.getClothID());
                  _loc1_.push(new PeopleItemInfo(_loc3_.getClothID(),_loc3_.getClothLevel()));
               }
            }
         }
         return _loc1_;
      }
      
      public function getClothIDs() : Array
      {
         var _loc3_:PeopleItemInfo = null;
         var _loc1_:Array = [];
         var _loc2_:Array = this.getClothArray();
         for each(_loc3_ in _loc2_)
         {
            if(_loc1_.indexOf(_loc3_.id) == -1)
            {
               _loc1_.push(_loc3_.id);
            }
         }
         return _loc1_;
      }
      
      public function getClothStr() : String
      {
         var _loc3_:PeopleItemInfo = null;
         var _loc1_:Array = this.getClothArray();
         var _loc2_:Array = [];
         for each(_loc3_ in _loc1_)
         {
            if(_loc2_.indexOf(_loc3_.id) == -1)
            {
               _loc2_.push(_loc3_.id);
            }
         }
         return _loc2_.sort().join(",");
      }
      
      public function takeOffCloth() : void
      {
         var _loc1_:ChangeClothAction = null;
         for each(_loc1_ in this.changeClothActObj)
         {
            _loc1_.takeOffCloth();
         }
         if(this.people)
         {
            (this.people as BasePeoleModel).removeEventListener(RobotEvent.CHANGE_DIRECTION,this.onChangeDirHandler);
         }
      }
      
      protected function getFlagArray() : Array
      {
         return new Array(FLAG_TOP,FLAG_EYE,FLAG_HEAD,FLAG_HAND,FLAG_HAND_1,FLAG_WAIST,FLAG_DECORATOR,FLAG_FOOT,FLAG_BG);
      }
      
      public function changeCloth(param1:Array) : void
      {
         var _loc3_:PeopleItemInfo = null;
         var _loc4_:String = null;
         var _loc5_:ChangeClothAction = null;
         var _loc6_:ChangeClothAction = null;
         var _loc7_:ChangeClothAction = null;
         var _loc2_:Boolean = false;
         for each(_loc3_ in param1)
         {
            if((_loc4_ = ClothXMLInfo.getItemInfo(_loc3_.id).type) == FLAG_HAND && ItemXMLInfo.isSpecialItem(_loc3_.id) && this.model == MODEL_PEOPLE)
            {
               (_loc5_ = this.changeClothActObj[FLAG_HAND]).changeCloth(_loc3_,1);
               (_loc6_ = this.changeClothActObj[FLAG_HAND_1]).changeCloth(_loc3_,2);
               _loc2_ = true;
            }
            else
            {
               (_loc7_ = this.changeClothActObj[_loc4_]).changeCloth(_loc3_);
            }
         }
         if(this.people)
         {
            if(_loc2_)
            {
               (this.people as BasePeoleModel).addEventListener(RobotEvent.CHANGE_DIRECTION,this.onChangeDirHandler);
            }
            else
            {
               (this.people as BasePeoleModel).addEventListener(RobotEvent.CHANGE_DIRECTION,this.onChangeDirHandler);
            }
         }
      }
      
      public function changeColor(param1:uint, param2:Boolean = true) : void
      {
         DisplayUtil.FillColor(this.colorMC,param1);
         if(param2)
         {
            DisplayUtil.removeAllChild(this.doodleMC);
         }
      }
      
      public function changeDoodle(param1:String) : void
      {
         var url:String = param1;
         DisplayUtil.removeAllChild(this.doodleMC);
         ResourceManager.getResource(url,function(param1:DisplayObject):void
         {
            if(people)
            {
               (param1 as MovieClip).gotoAndStop(people.direction);
            }
            if(doodleMC != null)
            {
               doodleMC.addChild(param1);
            }
         });
      }
      
      protected function initChangeCloth() : void
      {
         var _loc1_:String = null;
         var _loc2_:ChangeClothAction = null;
         for each(_loc1_ in this.flagArray)
         {
            _loc2_ = new ChangeClothAction(this.people,this.mcObj[_loc1_],_loc1_,this.model);
            this.changeClothActObj[_loc1_] = _loc2_;
         }
      }
      
      private function onChangeDirHandler(param1:DynamicEvent) : void
      {
         switch(this.people.direction)
         {
            case Direction.DOWN:
               this.changeDeep(downRenderOrder);
               break;
            case Direction.UP:
               this.changeDeep(upRenderOrder);
               break;
            case Direction.RIGHT:
               this.changeDeep(rightRenderOrder);
               break;
            case Direction.RIGHT_DOWN:
               this.changeDeep(rightdownRenderOrder);
               break;
            case Direction.RIGHT_UP:
               this.changeDeep(rightupRenderOrder);
               break;
            case Direction.LEFT:
               this.changeDeep(leftRenderOrder);
               break;
            case Direction.LEFT_DOWN:
               this.changeDeep(leftdownRenderOrder);
               break;
            case Direction.LEFT_UP:
               this.changeDeep(leftupRenderOrder);
         }
      }
      
      private function changeDeep(param1:Array) : void
      {
         var _loc2_:int = 0;
         while(_loc2_ < param1.length)
         {
            this.composeMC.addChild(this.composeMC[param1[_loc2_]]);
            _loc2_++;
         }
      }
      
      public function destroy() : void
      {
         var _loc1_:ChangeClothAction = null;
         if(this.people)
         {
            (this.people as BasePeoleModel).removeEventListener(RobotEvent.CHANGE_DIRECTION,this.onChangeDirHandler);
         }
         for each(_loc1_ in this.changeClothActObj)
         {
            _loc1_.destroy();
         }
         this.skeletonMC = null;
         this.composeMC = null;
         this.colorMC = null;
         this.doodleMC = null;
         this.people = null;
         this.mcObj = null;
         this.changeClothActObj = null;
      }
   }
}
