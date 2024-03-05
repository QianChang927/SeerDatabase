package com.robot.core.aimat
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ThrowXMLInfo;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.info.AimatInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.mode.ISprite;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.Direction;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.geom.Point;
   import flash.utils.getDefinitionByName;
   import gs.TweenMax;
   import gs.easing.Quad;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   import org.taomee.utils.GeomUtil;
   
   public class ThrowPropsController
   {
       
      
      private var _mc:MovieClip;
      
      private var _itemID:uint;
      
      private var _endPos:Point;
      
      private var _userID:uint;
      
      private var _startPoint:Point;
      
      private var _hitModel:BasePeoleModel;
      
      public function ThrowPropsController(param1:uint, param2:Point, param3:uint, param4:ISprite)
      {
         var _loc7_:int = 0;
         super();
         this._itemID = param1;
         this._endPos = param2;
         this._userID = param3;
         this._startPoint = param4.pos.clone();
         this._startPoint.y -= 40;
         param4.direction = Direction.angleToStr(GeomUtil.pointAngle(this._startPoint,this._endPos));
         var _loc5_:BasePeoleModel = param4 as BasePeoleModel;
         var _loc6_:int = this._startPoint.x + (this._endPos.x - this._startPoint.x) / 2;
         if(_loc5_.direction == Direction.RIGHT_UP || _loc5_.direction == Direction.LEFT_UP)
         {
            _loc7_ = this._endPos.y - Math.abs(this._endPos.x - this._startPoint.y) / 2;
         }
         else
         {
            _loc7_ = this._startPoint.y - Math.abs(this._endPos.x - this._startPoint.y) / 2;
         }
         this.loadBomb(_loc6_,_loc7_);
      }
      
      private function loadBomb(param1:int, param2:int) : void
      {
         var ox:int = param1;
         var oy:int = param2;
         ResourceManager.getResource(ClientConfig.getResPath("item/throw/line/" + this._itemID + ".swf"),function(param1:DisplayObject):void
         {
            _mc = param1 as MovieClip;
            _mc.gotoAndStop(1);
            _mc.x = _startPoint.x;
            _mc.y = _startPoint.y;
            LevelManager.mapLevel.addChild(_mc);
            var _loc2_:AimatInfo = new AimatInfo();
            _loc2_.id = _itemID;
            _loc2_.userID = _userID;
            _loc2_.startPos = _startPoint;
            _loc2_.endPos = _endPos;
            AimatController.dispatchEvent(AimatEvent.PLAY_START,_loc2_);
            TweenMax.to(_mc,1,{
               "bezier":[{
                  "x":ox,
                  "y":oy
               },{
                  "x":_endPos.x,
                  "y":_endPos.y
               }],
               "onComplete":onThrowComp,
               "orientToBezier":true,
               "ease":Quad.easeIn
            });
         },"item");
      }
      
      private function onThrowComp() : void
      {
         var info:AimatInfo = new AimatInfo();
         info.id = this._itemID;
         info.userID = this._userID;
         info.startPos = this._startPoint;
         info.endPos = this._endPos;
         AimatController.dispatchEvent(AimatEvent.PLAY_END,info);
         this._mc.rotation = 0;
         AnimateManager.playMcAnimate(this._mc,0,"",function():void
         {
            var _loc1_:BasePeoleModel = null;
            var _loc3_:int = 0;
            DisplayUtil.removeForParent(_mc);
            _mc = null;
            for each(_loc1_ in UserManager.getUserModelList())
            {
               if(_loc1_)
               {
                  if(_loc1_.hitTestPoint(_endPos.x,_endPos.y))
                  {
                     _hitModel = _loc1_;
                     break;
                  }
               }
            }
            if(_hitModel == null && _userID != MainManager.actorID)
            {
               if(MainManager.actorModel.hitTestPoint(_endPos.x,_endPos.y))
               {
                  _hitModel = MainManager.actorModel;
               }
            }
            var _loc2_:uint = ThrowXMLInfo.getChangeBodyId(_itemID);
            if(_loc2_ == 0)
            {
               if(_hitModel == null)
               {
                  return;
               }
               if(ThrowXMLInfo.getHasEffect(_itemID) == 0)
               {
                  return;
               }
               loadAnimate();
            }
            else
            {
               if(_hitModel == null)
               {
                  return;
               }
               if(_userID == MainManager.actorID && _itemID == 600067)
               {
                  _loc3_ = 48008;
                  SocketConnection.send(_loc3_,_hitModel.info.userID);
                  SocketConnection.send(1022,86062990);
               }
               if(_hitModel == MainManager.actorModel && _itemID == 600067)
               {
               }
               _hitModel.changeBody(_loc2_,6000);
            }
         },false,false);
      }
      
      private function loadAnimate() : void
      {
         ResourceManager.getResource(ClientConfig.getResPath("item/throw/effect/" + this._itemID + ".swf"),function(param1:DisplayObject):void
         {
            var effect:MovieClip = null;
            var mc:DisplayObject = param1;
            if(ThrowXMLInfo.getHideModel(_itemID) != 0)
            {
               _hitModel.visible = false;
            }
            effect = mc as MovieClip;
            effect.x = _hitModel.x;
            effect.y = _hitModel.y;
            LevelManager.mapLevel.addChild(effect);
            AnimateManager.playMcAnimate(effect,0,"",function():void
            {
               if(_itemID == 600073)
               {
                  getDefinitionByName("com.robot.app2.mapProcess.control.ChristmasDayActivityController").initDraw(effect);
               }
               else
               {
                  DisplayUtil.removeForParent(effect);
               }
               effect = null;
               _hitModel.visible = true;
            });
         },"item");
      }
   }
}
