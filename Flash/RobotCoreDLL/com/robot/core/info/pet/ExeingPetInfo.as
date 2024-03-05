package com.robot.core.info.pet
{
   import com.robot.core.config.ClientConfig;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.utils.IDataInput;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ExeingPetInfo
   {
       
      
      public var _flag:uint;
      
      public var _trainTime:uint;
      
      public var _capTm:Number;
      
      public var _petId:uint;
      
      public var _infoMC:MovieClip;
      
      public function ExeingPetInfo(param1:IDataInput = null, param2:MovieClip = null)
      {
         var _loc3_:uint = 0;
         super();
         if(param1)
         {
            this._flag = param1.readUnsignedInt();
            this._capTm = param1.readUnsignedInt();
            this._petId = param1.readUnsignedInt();
            _loc3_ = uint(param1.readUnsignedInt());
            this._trainTime = 80 - _loc3_ / 3600;
            param1.readUnsignedInt();
         }
         this._infoMC = param2;
      }
      
      public static function scaleByRect(param1:DisplayObject, param2:Number, param3:Number, param4:Number = 1) : void
      {
         var _loc5_:Number = param4;
         if(param1.width / param2 > param1.height / param3)
         {
            if(param1.width * _loc5_ > param2)
            {
               _loc5_ = param2 / param1.width;
            }
         }
         else if(param1.height * _loc5_ > param3)
         {
            _loc5_ = param3 / param1.height;
         }
         param1.scaleX = param1.scaleY = _loc5_;
      }
      
      public function showMc() : void
      {
         ResourceManager.getResource(ClientConfig.getPetSwfPath(this._petId,this._capTm),function(param1:DisplayObject):void
         {
            var _loc2_:MovieClip = param1 as MovieClip;
            DisplayUtil.stopAllMovieClip(_loc2_);
            DisplayUtil.removeAllChild(_infoMC["con"]);
            scaleByRect(_loc2_,71,65);
            _infoMC["con"].addChild(_loc2_);
         },"pet");
      }
   }
}
