package com.robot.core.userHoldParty
{
   import flash.display.MovieClip;
   import flash.geom.Point;
   
   public class PetPartyPosition extends MovieClip
   {
       
      
      private var _index:uint;
      
      private var _position:Point;
      
      private var _bubble:MovieClip;
      
      private var _food_need:uint;
      
      private var _pet:MovieClip;
      
      private var _mon_id:uint;
      
      private var _status:uint;
      
      private var _blood:MovieClip;
      
      private var _progress:uint;
      
      public function PetPartyPosition(param1:uint, param2:Point)
      {
         super();
         this._index = param1;
         this._position = param2;
      }
      
      public function setData(param1:uint, param2:uint, param3:uint, param4:uint) : void
      {
         this._food_need = param1;
         this._mon_id = param2;
         this._status = param3;
         this._progress = param4;
      }
      
      public function setMC(param1:MovieClip, param2:MovieClip, param3:MovieClip) : void
      {
         if(this._bubble)
         {
            this._bubble.parent.removeChild(this._bubble);
         }
         this._bubble = param1;
         this._bubble.gotoAndStop(this._food_need);
         if(this._status == 3)
         {
            this._bubble.gotoAndStop(4);
         }
         this._bubble.x = this._position.x;
         this._bubble.y = this._position.y;
         if(this._blood)
         {
            this._blood.parent.removeChild(this._blood);
         }
         this._blood = param3;
         this._blood.x = this._position.x;
         this._blood.y = this._position.y;
         var _loc4_:Number;
         if((_loc4_ = this.progress / 60) == 0)
         {
            this._blood.gotoAndStop(1);
         }
         else if(_loc4_ <= 0.2 && _loc4_ > 0)
         {
            this._blood.gotoAndStop(2);
         }
         else if(_loc4_ <= 0.4 && _loc4_ > 0.2)
         {
            this._blood.gotoAndStop(3);
         }
         else if(_loc4_ <= 0.6 && _loc4_ > 0.4)
         {
            this._blood.gotoAndStop(4);
         }
         else if(_loc4_ <= 0.8 && _loc4_ > 0.6)
         {
            this._blood.gotoAndStop(5);
         }
         else if(_loc4_ <= 1 && _loc4_ > 0.8)
         {
            this._blood.gotoAndStop(6);
         }
         if(this._pet)
         {
            this._pet.parent.removeChild(this._pet);
         }
         this._pet = param2;
         this._pet.x = this._position.x;
         this._pet.y = this._position.y - 10;
         this.addChild(this._blood);
         this.addChild(this._pet);
         this.addChild(this._bubble);
      }
      
      public function get bubble() : MovieClip
      {
         return this._bubble;
      }
      
      public function get pet() : MovieClip
      {
         return this._pet;
      }
      
      public function get blood() : MovieClip
      {
         return this._blood;
      }
      
      public function get index() : uint
      {
         return this._index;
      }
      
      public function get position() : Point
      {
         return this._position;
      }
      
      public function get food_need() : uint
      {
         return this._food_need;
      }
      
      public function get mon_id() : uint
      {
         return this._mon_id;
      }
      
      public function get status() : uint
      {
         return this._status;
      }
      
      public function get progress() : uint
      {
         return this._progress;
      }
   }
}
