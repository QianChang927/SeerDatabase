package com.robot.core.npc
{
   import com.robot.core.utils.Direction;
   import flash.geom.Point;
   
   public class NpcInfo
   {
       
      
      public var npcId:uint;
      
      public var npcName:String;
      
      public var isSimple:Boolean = false;
      
      public var nameY:int = 0;
      
      public var isStop:Boolean = false;
      
      public var dir:String;
      
      public var sound:uint;
      
      public var type:String;
      
      public var point:Point;
      
      public var walkPoints:Array;
      
      public var color:uint;
      
      public var clothIds:Array;
      
      public var hasName:Boolean = false;
      
      public var isWalk:Boolean = true;
      
      public var statisticId:uint;
      
      public function NpcInfo(param1:XML = null)
      {
         var _loc2_:Array = null;
         var _loc3_:Array = null;
         var _loc4_:int = 0;
         this.walkPoints = [];
         this.clothIds = [];
         super();
         if(param1)
         {
            this.npcId = uint(param1.@id);
            this.npcName = param1.@name;
            if(param1.hasOwnProperty("@isSimple"))
            {
               if(uint(param1.@isSimple) == 1)
               {
                  this.isSimple = true;
               }
            }
            if(param1.hasOwnProperty("@nameY"))
            {
               this.nameY = uint(param1.@nameY);
            }
            if(param1.hasOwnProperty("@isStop"))
            {
               if(uint(param1.@isStop) == 1)
               {
                  this.isStop = true;
               }
            }
            if(param1.hasOwnProperty("@dir"))
            {
               this.dir = param1.@dir;
            }
            else
            {
               this.dir = Direction.DOWN;
            }
            if(param1.hasOwnProperty("@sound"))
            {
               this.sound = uint(param1.@sound);
            }
            if(param1.hasOwnProperty("@isWalk") && param1.@isWalk == "0")
            {
               this.isWalk = false;
            }
            else
            {
               this.isWalk = true;
            }
            this.type = param1.@type;
            _loc2_ = String(param1.@point).split("|");
            this.point = new Point(uint(_loc2_[0]),uint(_loc2_[1]));
            if(param1.hasOwnProperty("@points"))
            {
               _loc3_ = String(param1.@points).split("|");
               _loc4_ = 0;
               while(_loc4_ < 4)
               {
                  this.walkPoints.push(new Point(uint(_loc3_[_loc4_ * 2]),uint(_loc3_[_loc4_ * 2 + 1])));
                  _loc4_++;
               }
            }
            if(param1.hasOwnProperty("@color"))
            {
               this.color = uint(param1.@color);
            }
            if(param1.hasOwnProperty("@cloths"))
            {
               this.clothIds = String(param1.@cloths).split("|");
            }
            if(param1.hasOwnProperty("@hasName"))
            {
               if(param1.@hasName)
               {
                  this.hasName = true;
               }
            }
            if(param1.hasOwnProperty("@statisticId") && param1.@statisticId != "")
            {
               this.statisticId = uint(param1.@statisticId);
            }
         }
      }
   }
}
