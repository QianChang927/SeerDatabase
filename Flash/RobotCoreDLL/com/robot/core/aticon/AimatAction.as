package com.robot.core.aticon
{
   import com.robot.core.aimat.AimatController;
   import com.robot.core.aimat.IAimat;
   import com.robot.core.aimat.ThrowPropsController;
   import com.robot.core.config.xml.AimatXMLInfo;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.info.AimatInfo;
   import com.robot.core.manager.AimatUIManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.mode.ISprite;
   import com.robot.core.utils.Direction;
   import flash.display.DisplayObjectContainer;
   import flash.geom.Point;
   import org.taomee.utils.GeomUtil;
   import org.taomee.utils.Utils;
   
   public class AimatAction
   {
      
      private static const PATH:String = "com.robot.app.aimat.Aimat_";
       
      
      private var _aimatID:uint;
      
      private var _endPos:Point;
      
      private var _userID:uint;
      
      private var _people:ISprite;
      
      private var _aimatType:uint;
      
      private var _aimatState:uint;
      
      public function AimatAction()
      {
         super();
      }
      
      public function execute(param1:uint, param2:uint, param3:Point, param4:uint, param5:ISprite) : void
      {
         var cls:Class = null;
         var itemID:uint = param1;
         var aimatID:uint = param2;
         var endPos:Point = param3;
         var userID:uint = param4;
         var people:ISprite = param5;
         if(itemID != 0)
         {
            new ThrowPropsController(itemID,endPos,userID,people);
            return;
         }
         this._aimatID = aimatID;
         this._endPos = endPos;
         this._userID = userID;
         this._people = people;
         this._aimatType = AimatXMLInfo.getAimatType(this._aimatID);
         this._aimatState = AimatXMLInfo.getAimatState(this._aimatID);
         if(this._aimatType == 1)
         {
            cls = Utils.getClass(PATH + this._aimatID.toString());
            if(cls)
            {
               this.initAimat(cls);
            }
            else
            {
               this.initAimat(Utils.getClass("com.robot.app.aimat.base.BaseLaserAimat"));
            }
         }
         else
         {
            AimatUIManager.load(aimatID,function():void
            {
               onLoaderComplete();
            });
         }
      }
      
      private function onLoaderComplete() : void
      {
         var _loc1_:Class = Utils.getClass(PATH + this._aimatID.toString());
         if(_loc1_)
         {
            this.initAimat(_loc1_);
         }
         else
         {
            switch(this._aimatType)
            {
               case 2:
                  this.initAimat(Utils.getClass("com.robot.app.aimat.base.BaseAnimateAimat"));
                  break;
               case 3:
                  this.initAimat(Utils.getClass("com.robot.app.aimat.base.BaseAnimateAimatSimple"));
                  break;
               default:
                  this.initAimat(Utils.getClass("com.robot.app.aimat.base.BaseLaserAimat"));
            }
         }
      }
      
      private function initAimat(param1:Class) : void
      {
         var _loc2_:Point = this._people.pos.clone();
         _loc2_.y -= 40;
         var _loc3_:DisplayObjectContainer = MapManager.currentMap.root;
         if(_loc3_)
         {
            if(_loc3_.scrollRect)
            {
               this._endPos.x += _loc3_.scrollRect.x;
               this._endPos.y += _loc3_.scrollRect.y;
            }
         }
         this._people.direction = Direction.angleToStr(GeomUtil.pointAngle(_loc2_,this._endPos));
         var _loc4_:AimatInfo;
         (_loc4_ = new AimatInfo()).id = this._aimatID;
         _loc4_.userID = this._userID;
         _loc4_.startPos = _loc2_;
         _loc4_.endPos = this._endPos;
         _loc4_.aimatType = this._aimatType;
         _loc4_.aimatState = this._aimatState;
         var _loc5_:IAimat;
         (_loc5_ = new param1()).execute(_loc4_);
         AimatController.dispatchEvent(AimatEvent.PLAY_START,_loc4_);
      }
   }
}
