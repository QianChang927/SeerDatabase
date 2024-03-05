package com.robot.app.sceneInteraction
{
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.event.FitmentEvent;
   import com.robot.core.info.FitmentInfo;
   import com.robot.core.manager.FitmentManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.mode.FitmentModel;
   import com.robot.core.utils.DragTargetType;
   import com.robot.core.utils.SolidType;
   import flash.display.Sprite;
   import flash.events.FocusEvent;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.manager.DepthManager;
   import org.taomee.utils.ArrayUtil;
   
   public class RoomFitment
   {
       
      
      private var _currFitment:FitmentModel;
      
      private var _useList:Array;
      
      public function RoomFitment()
      {
         this._useList = [];
         super();
         this.onUseFitment();
      }
      
      public function destroy() : void
      {
         var _loc3_:FitmentModel = null;
         FitmentManager.removeEventListener(FitmentEvent.ADD_TO_MAP,this.onAddMap);
         FitmentManager.removeEventListener(FitmentEvent.REMOVE_TO_MAP,this.onRemoveMap);
         FitmentManager.removeEventListener(FitmentEvent.DRAG_IN_MAP,this.onDragInMap);
         FitmentManager.destroy();
         var _loc1_:int = int(this._useList.length);
         var _loc2_:int = 0;
         while(_loc2_ < _loc1_)
         {
            _loc3_ = this._useList[_loc2_] as FitmentModel;
            if(_loc3_)
            {
               _loc3_.removeEventListener(MouseEvent.MOUSE_DOWN,this.onFMDown);
               _loc3_.destroy();
               _loc3_ = null;
            }
            _loc2_++;
         }
         this._useList = null;
         if(this._currFitment)
         {
            this._currFitment.removeEventListener(FocusEvent.FOCUS_OUT,this.onFocusOut);
            this._currFitment = null;
         }
      }
      
      public function getStorageInfo() : void
      {
         FitmentManager.addEventListener(FitmentEvent.ADD_TO_MAP,this.onAddMap);
         FitmentManager.addEventListener(FitmentEvent.REMOVE_TO_MAP,this.onRemoveMap);
         FitmentManager.addEventListener(FitmentEvent.DRAG_IN_MAP,this.onDragInMap);
         FitmentManager.getStorageInfo();
      }
      
      private function onDragInMap(param1:FitmentEvent) : void
      {
         var _loc2_:FitmentModel = null;
         for each(_loc2_ in this._useList)
         {
            if(ItemXMLInfo.getIsFloor(_loc2_.info.id))
            {
               _loc2_.parent.addChildAt(_loc2_,0);
            }
         }
      }
      
      public function openDrag() : void
      {
         this._useList.forEach(function(param1:FitmentModel, param2:int, param3:Array):void
         {
            param1.addEventListener(MouseEvent.MOUSE_DOWN,onFMDown);
            param1.mouseChildren = false;
            param1.buttonMode = true;
            param1.dragEnabled = true;
         });
      }
      
      public function closeDrag() : void
      {
         this._useList.forEach(function(param1:FitmentModel, param2:int, param3:Array):void
         {
            param1.removeEventListener(MouseEvent.MOUSE_DOWN,onFMDown);
            param1.mouseChildren = true;
            if(param1.funID == 0)
            {
               param1.buttonMode = false;
            }
            param1.dragEnabled = false;
         });
      }
      
      private function onUseFitment() : void
      {
         var info:FitmentInfo = null;
         var t:uint = 0;
         var fm:FitmentModel = null;
         var arr:Array = FitmentManager.getUsedList();
         for each(info in arr)
         {
            if(info.type != SolidType.FRAME)
            {
               fm = new FitmentModel();
               fm.show(info,MapManager.currentMap.depthLevel);
               this._useList.push(fm);
            }
         }
         t = setTimeout(function():void
         {
            var _loc1_:* = undefined;
            clearTimeout(t);
            for each(_loc1_ in _useList)
            {
               if(ItemXMLInfo.getIsFloor(_loc1_.info.id))
               {
                  _loc1_.parent.addChildAt(_loc1_,0);
               }
            }
         },500);
      }
      
      private function onAddMap(param1:FitmentEvent) : void
      {
         var _loc3_:FitmentModel = null;
         var _loc2_:FitmentModel = new FitmentModel();
         _loc2_.addEventListener(MouseEvent.MOUSE_DOWN,this.onFMDown);
         _loc2_.mouseChildren = false;
         _loc2_.buttonMode = true;
         _loc2_.dragEnabled = true;
         _loc2_.show(param1.info,MapManager.currentMap.depthLevel);
         this._useList.push(_loc2_);
         DepthManager.swapDepth(_loc2_,_loc2_.y);
         for each(_loc3_ in this._useList)
         {
            if(ItemXMLInfo.getIsFloor(_loc3_.info.id))
            {
               _loc3_.parent.addChildAt(_loc3_,0);
            }
         }
      }
      
      private function onRemoveMap(param1:FitmentEvent) : void
      {
         var _loc4_:FitmentModel = null;
         var _loc2_:int = int(MapManager.currentMap.depthLevel.numChildren);
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_)
         {
            if(_loc4_ = MapManager.currentMap.depthLevel.getChildAt(_loc3_) as FitmentModel)
            {
               if(_loc4_.info == param1.info)
               {
                  if(this._currFitment == _loc4_)
                  {
                     this._currFitment.removeEventListener(FocusEvent.FOCUS_OUT,this.onFocusOut);
                     this._currFitment = null;
                  }
                  ArrayUtil.removeValueFromArray(this._useList,_loc4_);
                  _loc4_.removeEventListener(MouseEvent.MOUSE_DOWN,this.onFMDown);
                  _loc4_.destroy();
                  _loc4_ = null;
                  return;
               }
            }
            _loc3_++;
         }
      }
      
      private function onFMDown(param1:MouseEvent) : void
      {
         var _loc4_:Point = null;
         var _loc2_:FitmentModel = param1.currentTarget as FitmentModel;
         var _loc3_:Sprite = _loc2_.content as Sprite;
         if(_loc3_)
         {
            _loc4_ = new Point(param1.stageX - _loc2_.x,param1.stageY - _loc2_.y);
            FitmentManager.doDrag(_loc3_,_loc2_.info,_loc2_,DragTargetType.MAP,_loc4_);
         }
         this._currFitment = _loc2_;
         this._currFitment.setSelect(true);
         this._currFitment.addEventListener(FocusEvent.FOCUS_OUT,this.onFocusOut);
      }
      
      private function onFocusOut(param1:FocusEvent) : void
      {
         var _loc2_:FitmentModel = param1.currentTarget as FitmentModel;
         _loc2_.removeEventListener(FocusEvent.FOCUS_OUT,this.onFocusOut);
         _loc2_.setSelect(false);
      }
      
      public function get useList() : Array
      {
         return this._useList;
      }
   }
}
