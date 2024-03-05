package com.robot.core.mode
{
   import flash.display.BitmapData;
   import flash.display.DisplayObjectContainer;
   import flash.display.Sprite;
   import flash.geom.Point;
   import org.taomee.algo.IMapModel;
   
   public class PanelMapModel implements IMapModel
   {
       
      
      private var _data:Array;
      
      private var _gridSize:uint = 10;
      
      private var _gridX:uint;
      
      private var _gridY:uint;
      
      private var _spaceLevel:Sprite;
      
      private var _typeLevel:DisplayObjectContainer;
      
      private var _allowData:Array;
      
      private var width:int = 960;
      
      private var height:int = 560;
      
      public function PanelMapModel(param1:DisplayObjectContainer, param2:int = 960, param3:int = 560)
      {
         this._allowData = [];
         super();
         this.width = param2;
         this.height = param3;
         this._gridX = int(this.width / this._gridSize);
         this._gridY = int(this.height / this._gridSize);
         this._typeLevel = param1;
         this.makeMapNormal();
      }
      
      public function makeMapNormal() : void
      {
         var _loc1_:uint = 0;
         var _loc2_:uint = 0;
         var _loc3_:uint = 0;
         var _loc4_:Point = new Point();
         var _loc5_:BitmapData;
         (_loc5_ = new BitmapData(this.width,this.height,true,0)).draw(this._typeLevel);
         this._data = new Array(this._gridX);
         _loc1_ = uint(int(this._gridSize / 2));
         _loc2_ = 0;
         while(_loc2_ < this._gridX)
         {
            this._data[_loc2_] = new Array(this._gridY);
            _loc3_ = 0;
            while(_loc3_ < this._gridY)
            {
               if(_loc5_.getPixel32(_loc2_ * this._gridSize + _loc1_,_loc3_ * this._gridSize + _loc1_))
               {
                  this._data[_loc2_][_loc3_] = false;
               }
               else
               {
                  this._data[_loc2_][_loc3_] = true;
                  this._allowData.push(new Point(_loc2_ * this._gridSize,_loc3_ * this._gridSize));
               }
               _loc3_++;
            }
            _loc2_++;
         }
         _loc4_ = null;
         _loc5_.dispose();
         _loc5_ = null;
      }
      
      public function get data() : Array
      {
         return this._data;
      }
      
      public function get gridSize() : uint
      {
         return this._gridSize;
      }
      
      public function get gridX() : uint
      {
         return this._gridX;
      }
      
      public function get gridY() : uint
      {
         return this._gridY;
      }
      
      public function destory() : void
      {
         this._typeLevel = null;
         this._spaceLevel = null;
      }
   }
}
