package com.robot.core.aimat
{
   import com.robot.core.event.ItemEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.UIManager;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class AimatGridPanel
   {
      
      private static var bgMC:MovieClip;
      
      private static var gridArray:Array = [];
      
      private static var _forwardItemID:uint = 0;
      
      private static var _totalPage:int = 1;
      
      private static var _currentPage:int = 1;
      
      private static var _itemIds:Array = [];
      
      private static var lastTime:int;
      
      private static var firstBoo:Boolean;
      
      private static var timeoutId:int;
      
      private static var lastItem:com.robot.core.aimat.AimatGrid;
      
      private static var lastItemid:int;
      
      {
         setup();
      }
      
      public function AimatGridPanel()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:com.robot.core.aimat.AimatGrid = null;
         var _loc2_:uint = 0;
         bgMC = UIManager.getMovieClip("ui_ThrowThingPanel_New");
         bgMC.x = 317;
         bgMC.y = 56;
         updateFlipStatus();
         bgMC["prev_btn"].addEventListener(MouseEvent.CLICK,prevHandler);
         bgMC["next_btn"].addEventListener(MouseEvent.CLICK,nextHandler);
         bgMC["close"].addEventListener(MouseEvent.CLICK,closeHandler);
         bgMC["unselect"].addEventListener(MouseEvent.CLICK,cancelHandle);
         bgMC["bg"].addEventListener(MouseEvent.MOUSE_DOWN,onDragDown);
         bgMC["bg"].addEventListener(MouseEvent.MOUSE_UP,onDragUp);
         _loc1_ = new com.robot.core.aimat.AimatGrid();
         _loc1_.x = 86;
         _loc1_.y = 6.5;
         _loc1_.itemID = 0;
         _loc1_.addEventListener(com.robot.core.aimat.AimatGrid.CLICK,onGridClick);
         _loc1_.addEventListener(MouseEvent.CLICK,onGridClick1);
         bgMC.addChild(_loc1_);
         _loc2_ = 1;
         while(_loc2_ < 5)
         {
            _loc1_ = new com.robot.core.aimat.AimatGrid();
            _loc1_.x = 86 + (_loc1_.width + 6) * (_loc2_ % 5);
            _loc1_.y = 6.5 + (_loc1_.height + 6) * Math.floor(_loc2_ / 5);
            _loc1_.addEventListener(com.robot.core.aimat.AimatGrid.CLICK,onGridClick);
            _loc1_.addEventListener(MouseEvent.CLICK,onGridClick1);
            gridArray.push(_loc1_);
            bgMC.addChild(_loc1_);
            _loc2_++;
         }
         ItemManager.addEventListener(ItemEvent.THROW_LIST,onThrowList);
         EventManager.addEventListener("throwThingOverEvent",thingThrowOver);
      }
      
      private static function onDragDown(param1:Event) : void
      {
         closeAimat();
         bgMC.startDrag();
      }
      
      private static function onDragUp(param1:Event) : void
      {
         bgMC.stopDrag();
      }
      
      private static function cancelHandle(param1:MouseEvent) : void
      {
         closeAimat();
      }
      
      private static function closeAimat() : void
      {
         lastItem = null;
         lastItemid = -1;
         AimatController.close(null,false);
         clearTimeout(timeoutId);
         MainManager.getStage().removeEventListener(Event.ENTER_FRAME,enterFrameHandle);
         LevelManager.mapLevel.mouseChildren = true;
         LevelManager.iconLevel.mouseChildren = LevelManager.iconLevel.mouseEnabled = true;
         LevelManager.toolsLevel.mouseChildren = LevelManager.toolsLevel.mouseEnabled = true;
         clearSelect();
      }
      
      private static function updateFlipStatus() : void
      {
         bgMC["page_txt"].text = _currentPage + "/" + _totalPage;
         bgMC["prev_btn"].mouseEnabled = false;
         bgMC["next_btn"].mouseEnabled = false;
         if(_currentPage > 1)
         {
            bgMC["prev_btn"].mouseEnabled = true;
         }
         if(_currentPage < _totalPage)
         {
            bgMC["next_btn"].mouseEnabled = true;
         }
      }
      
      private static function prevHandler(param1:MouseEvent) : void
      {
         flipPage(-1);
      }
      
      private static function closeHandler(param1:MouseEvent) : void
      {
         closeAimat();
         hide();
      }
      
      private static function nextHandler(param1:MouseEvent) : void
      {
         flipPage(1);
      }
      
      private static function flipPage(param1:int) : void
      {
         var _loc5_:com.robot.core.aimat.AimatGrid = null;
         clear();
         _currentPage += param1;
         updateFlipStatus();
         var _loc2_:uint = _itemIds.length > _currentPage * 4 ? uint(_currentPage * 4) : _itemIds.length;
         var _loc3_:uint = 0;
         var _loc4_:uint = uint((_currentPage - 1) * 4);
         while(_loc4_ < _loc2_)
         {
            _loc5_ = gridArray[_loc3_];
            if(_itemIds[_loc4_] == lastItemid)
            {
               _loc5_.selected(true);
            }
            else
            {
               _loc5_.selected(false);
            }
            _loc5_.itemID = _itemIds[_loc4_];
            _loc3_++;
            _loc4_++;
         }
      }
      
      public static function show() : void
      {
         lastItem = null;
         lastItemid = -1;
         _currentPage = 1;
         if(DisplayUtil.hasParent(bgMC))
         {
            hide();
            return;
         }
         clear();
         clearSelect();
         ItemManager.getThrowThing();
         LevelManager.topLevel.addChild(bgMC);
         MainManager.getStage().addEventListener(MouseEvent.CLICK,stageClick);
      }
      
      private static function enterFrameHandle(param1:Event) : void
      {
         if(lastItem == null)
         {
            LevelManager.mapLevel.mouseChildren = true;
            LevelManager.iconLevel.mouseChildren = LevelManager.iconLevel.mouseEnabled = true;
            LevelManager.toolsLevel.mouseChildren = LevelManager.toolsLevel.mouseEnabled = true;
            if(firstBoo)
            {
               lastTime = SystemTimerManager.sysBJDate.time / 1000;
               firstBoo = false;
            }
            else if(SystemTimerManager.sysBJDate.time / 1000 - lastTime > 2)
            {
               MainManager.getStage().removeEventListener(Event.ENTER_FRAME,enterFrameHandle);
            }
         }
         else
         {
            LevelManager.mapLevel.mouseChildren = false;
            LevelManager.iconLevel.mouseChildren = LevelManager.iconLevel.mouseEnabled = false;
            LevelManager.toolsLevel.mouseChildren = LevelManager.toolsLevel.mouseEnabled = false;
         }
      }
      
      private static function thingThrowOver(param1:Event) : void
      {
         var e:Event = param1;
         if(Boolean(lastItem) && lastItem.itemID == 0)
         {
            if(AimatController.continuous <= 0)
            {
               timeoutId = setTimeout(function():void
               {
                  AimatController.start(0,false);
               },500);
            }
         }
         else
         {
            LevelManager.mapLevel.mouseChildren = false;
         }
         ItemManager.getThrowThing();
      }
      
      private static function stageClick(param1:MouseEvent) : void
      {
         if(bgMC.hitTestPoint(MainManager.getStage().mouseX,MainManager.getStage().mouseY,true) == false)
         {
            if(lastItem == null)
            {
               hide();
            }
         }
      }
      
      public static function hide() : void
      {
         clearTimeout(timeoutId);
         lastItem = null;
         lastItemid = -1;
         DisplayUtil.removeForParent(bgMC,false);
         MainManager.getStage().removeEventListener(MouseEvent.CLICK,stageClick);
         MainManager.getStage().removeEventListener(Event.ENTER_FRAME,enterFrameHandle);
         firstBoo = false;
      }
      
      private static function onThrowList(param1:Event) : void
      {
         var _loc4_:uint = 0;
         var _loc5_:Boolean = false;
         var _loc6_:int = 0;
         var _loc7_:int = 0;
         var _loc8_:com.robot.core.aimat.AimatGrid = null;
         clear();
         LevelManager.mapLevel.mouseChildren = true;
         _itemIds = ItemManager.getThrowIDs();
         if(lastItemid > 0)
         {
            _loc5_ = true;
            _loc6_ = 0;
            while(_loc6_ < _itemIds.length)
            {
               if(_itemIds[_loc6_] == lastItemid)
               {
                  _loc5_ = false;
                  if(lastItemid == 600073)
                  {
                     closeAimat();
                  }
                  else
                  {
                     AimatController.start(lastItemid,false);
                  }
                  break;
               }
               _loc6_++;
            }
            if(_loc5_)
            {
               closeAimat();
            }
         }
         if(_itemIds.length)
         {
            _totalPage = uint((_itemIds.length - 1) / 4) + 1;
         }
         else
         {
            _totalPage = 1;
         }
         if(_currentPage > _totalPage)
         {
            _currentPage = _totalPage;
         }
         var _loc2_:int = _currentPage;
         _currentPage = 1;
         updateFlipStatus();
         if(_itemIds.indexOf(_forwardItemID) != -1)
         {
            _loc7_ = _itemIds.indexOf(_forwardItemID);
            _itemIds.splice(_loc7_,1);
            _itemIds.unshift(_forwardItemID);
         }
         var _loc3_:uint = 0;
         for each(_loc4_ in _itemIds)
         {
            if(_loc3_ < 4)
            {
               (_loc8_ = gridArray[_loc3_]).itemID = _loc4_;
               _loc3_++;
            }
         }
         flipPage(_loc2_ - _currentPage);
      }
      
      public static function setItemForward(param1:uint) : void
      {
         _forwardItemID = param1;
      }
      
      private static function clear() : void
      {
         var _loc1_:com.robot.core.aimat.AimatGrid = null;
         for each(_loc1_ in gridArray)
         {
            _loc1_.empty();
            _loc1_.selected(false);
         }
      }
      
      private static function onGridClick(param1:Event) : void
      {
      }
      
      private static function onGridClick1(param1:Event) : void
      {
         firstBoo = true;
         MainManager.getStage().removeEventListener(Event.ENTER_FRAME,enterFrameHandle);
         MainManager.getStage().addEventListener(Event.ENTER_FRAME,enterFrameHandle);
         clearTimeout(timeoutId);
         var _loc2_:com.robot.core.aimat.AimatGrid = param1.currentTarget as com.robot.core.aimat.AimatGrid;
         lastItem = _loc2_;
         lastItemid = _loc2_.itemID;
         clearSelect();
         _loc2_.selected(true);
      }
      
      private static function clearSelect() : void
      {
         var _loc2_:* = undefined;
         var _loc1_:int = 0;
         while(_loc1_ < bgMC.numChildren)
         {
            _loc2_ = bgMC.getChildAt(_loc1_);
            if(_loc2_ is com.robot.core.aimat.AimatGrid)
            {
               _loc2_.selected(false);
            }
            _loc1_++;
         }
      }
   }
}
