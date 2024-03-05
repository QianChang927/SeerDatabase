package com.robot.core.manager
{
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.MapXMLInfo;
   import com.robot.core.event.FitmentEvent;
   import com.robot.core.info.FitmentInfo;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.DragTargetType;
   import com.robot.core.utils.SolidType;
   import flash.display.DisplayObject;
   import flash.display.DisplayObjectContainer;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.geom.Rectangle;
   import flash.utils.ByteArray;
   import flash.utils.getDefinitionByName;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.DepthManager;
   import org.taomee.utils.DisplayUtil;
   
   public class FitmentManager
   {
      
      public static var isChange:Boolean;
      
      public static var storagePanel:Sprite;
      
      public static var userID:uint;
      
      public static var roomID:uint;
      
      private static var usedList:Array = [];
      
      private static var localAddUsedList:Array = [];
      
      private static var localDeleteUsedList:Array = [];
      
      private static var storageMap:HashMap = new HashMap();
      
      private static var _sprite:Sprite;
      
      private static var _info:FitmentInfo;
      
      private static var _parent:DisplayObjectContainer;
      
      private static var _type:int;
      
      private static var _offp:Point;
      
      private static var _wapmc:DisplayObject;
      
      private static var _flomc:DisplayObject;
      
      private static var _isMove:Boolean;
      
      private static var _originPos:Point;
      
      private static var _isArrlowInMap:Boolean = true;
      
      private static var _instance:EventDispatcher;
       
      
      public function FitmentManager()
      {
         super();
      }
      
      public static function clearlocalUsedList() : void
      {
         localAddUsedList = [];
         localDeleteUsedList = [];
      }
      
      public static function doDrag(param1:Sprite, param2:FitmentInfo, param3:DisplayObjectContainer, param4:int, param5:Point = null) : void
      {
         _originPos = new Point();
         _sprite = param1;
         _originPos.x = param1.x;
         _originPos.y = param1.y;
         _sprite.mouseEnabled = false;
         _sprite.mouseChildren = false;
         _info = param2;
         _parent = param3;
         _type = param4;
         if(param5)
         {
            _offp = param5;
         }
         else
         {
            _offp = new Point();
         }
         var _loc6_:Point = DisplayUtil.localToLocal(_sprite,MainManager.getStage());
         _sprite.x = _loc6_.x;
         _sprite.y = _loc6_.y;
         MainManager.getStage().addChild(_sprite);
         MainManager.getStage().addEventListener(MouseEvent.MOUSE_UP,onUp);
         MainManager.getStage().addEventListener(MouseEvent.MOUSE_MOVE,onMove);
         var _loc7_:Rectangle = _sprite.getRect(_sprite);
         _sprite.startDrag(false,new Rectangle(-_loc7_.x,-_loc7_.y,MainManager.getStageWidth() - _loc7_.width,MainManager.getStageHeight() - _loc7_.height));
         if(MapManager.currentMap.animatorLevel)
         {
            _wapmc = MapManager.currentMap.animatorLevel.getChildByName("wapMC");
            _flomc = MapManager.currentMap.animatorLevel.getChildByName("floMC");
         }
         _isMove = false;
      }
      
      public static function saveInfo() : void
      {
         var _loc3_:FitmentInfo = null;
         if(!isChange)
         {
            return;
         }
         isChange = false;
         localAddUsedList = [];
         localDeleteUsedList = [];
         var _loc1_:int = int(usedList.length);
         var _loc2_:ByteArray = new ByteArray();
         _loc2_.writeUnsignedInt(roomID);
         _loc2_.writeUnsignedInt(_loc1_);
         for each(_loc3_ in usedList)
         {
            _loc2_.writeUnsignedInt(_loc3_.id);
            _loc2_.writeUnsignedInt(_loc3_.pos.x);
            _loc2_.writeUnsignedInt(_loc3_.pos.y);
            _loc2_.writeUnsignedInt(_loc3_.dir);
            _loc2_.writeUnsignedInt(_loc3_.status);
         }
         SocketConnection.send(CommandID.SET_FITMENT,_loc2_);
      }
      
      public static function cancelInfo() : void
      {
         var _loc1_:FitmentInfo = null;
         var _loc2_:FitmentInfo = null;
         if(!isChange)
         {
            return;
         }
         isChange = false;
         while(localAddUsedList.length > 0)
         {
            _loc1_ = localAddUsedList[0] as FitmentInfo;
            addInStorage(_loc1_);
            removeInMap(_loc1_);
         }
         localAddUsedList = [];
         while(localDeleteUsedList.length > 0)
         {
            _loc2_ = localDeleteUsedList[0] as FitmentInfo;
            addInMap(_loc2_);
            removeInStorage(_loc2_.id);
         }
         localDeleteUsedList = [];
      }
      
      public static function saveRoomType(param1:FitmentInfo, param2:Function) : void
      {
         var info:FitmentInfo = param1;
         var event:Function = param2;
         var byData:ByteArray = new ByteArray();
         byData.writeUnsignedInt(roomID);
         byData.writeUnsignedInt(1);
         byData.writeUnsignedInt(info.id);
         byData.writeUnsignedInt(info.pos.x);
         byData.writeUnsignedInt(info.pos.y);
         byData.writeUnsignedInt(info.dir);
         byData.writeUnsignedInt(info.status);
         SocketConnection.addCmdListener(CommandID.SET_FITMENT,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.SET_FITMENT,arguments.callee);
            event();
         });
         SocketConnection.send(CommandID.SET_FITMENT,byData);
      }
      
      private static function onMove(param1:MouseEvent) : void
      {
         _isMove = true;
         var _loc2_:Point = new Point(DisplayObject(param1.currentTarget).mouseX,DisplayObject(param1.currentTarget).mouseY);
         _loc2_ = _loc2_.subtract(_offp);
         var _loc3_:* = getDefinitionByName("com.robot.app.storage.StorageController").panel.isShrink;
         if(storagePanel.hitTestPoint(param1.stageX,param1.stageY) && !_loc3_)
         {
            _sprite.alpha = 1;
         }
         else
         {
            if(_info.type == SolidType.PUT)
            {
               if(_flomc.hitTestPoint(_loc2_.x,_loc2_.y,true))
               {
                  _isArrlowInMap = true;
                  _sprite.alpha = 1;
               }
               else
               {
                  _isArrlowInMap = false;
                  _sprite.alpha = 0.4;
               }
            }
            if(_info.type == SolidType.HANG)
            {
               if(_wapmc.hitTestPoint(_loc2_.x,_loc2_.y,true))
               {
                  _isArrlowInMap = true;
                  _sprite.alpha = 1;
               }
               else
               {
                  _isArrlowInMap = false;
                  _sprite.alpha = 0.4;
               }
            }
         }
      }
      
      private static function onUp(param1:MouseEvent) : void
      {
         MainManager.getStage().removeEventListener(MouseEvent.MOUSE_UP,onUp);
         MainManager.getStage().removeEventListener(MouseEvent.MOUSE_MOVE,onMove);
         var _loc2_:Point = new Point(DisplayObject(param1.currentTarget).mouseX,DisplayObject(param1.currentTarget).mouseY);
         _loc2_ = _loc2_.subtract(_offp);
         _sprite.stopDrag();
         var _loc3_:* = getDefinitionByName("com.robot.app.storage.StorageController").panel.isShrink;
         if(storagePanel.hitTestPoint(param1.stageX,param1.stageY) && !_loc3_)
         {
            dragInStorage();
         }
         else if(MapManager.currentMap.root.hitTestPoint(_loc2_.x,_loc2_.y))
         {
            if(_isArrlowInMap)
            {
               dragInMap(_loc2_);
            }
            else
            {
               dragInNo();
            }
         }
         else
         {
            dragInNo();
         }
         _sprite = null;
         _parent = null;
         _info = null;
      }
      
      private static function dragInMap(param1:Point) : void
      {
         isChange = true;
         if(_type == DragTargetType.MAP)
         {
            _info.pos = param1;
            _sprite.x = 0;
            _sprite.y = 0;
            _sprite.mouseEnabled = true;
            _sprite.mouseChildren = true;
            _parent.x = param1.x;
            _parent.y = param1.y;
            _parent.addChild(_sprite);
            DepthManager.swapDepth(_parent,_parent.y);
            dispatchEvent(new FitmentEvent(FitmentEvent.DRAG_IN_MAP,null));
         }
         else
         {
            _info.pos = param1;
            addInMap(_info);
            if(_type == DragTargetType.STORAGE)
            {
               DisplayUtil.removeForParent(_sprite);
               removeInStorage(_info.id);
            }
         }
      }
      
      private static function dragInStorage() : void
      {
         if(_type == DragTargetType.STORAGE)
         {
            if(_isMove)
            {
               DisplayUtil.removeForParent(_sprite);
               dispatchEvent(new FitmentEvent(FitmentEvent.ADD_TO_STORAGE,_info));
               localDeleteUsedList.push(_info);
            }
            else
            {
               isChange = true;
               if(_info.type == SolidType.PUT)
               {
                  _info.pos = MapXMLInfo.getRoomDefaultFloPos(MapManager.styleID);
               }
               else if(_info.type == SolidType.HANG)
               {
                  _info.pos = MapXMLInfo.getRoomDefaultWapPos(MapManager.styleID);
               }
               else
               {
                  _info.pos = MainManager.getStageCenterPoint();
               }
               addInMap(_info);
               removeInStorage(_info.id);
               DisplayUtil.removeForParent(_sprite);
            }
         }
         else
         {
            addInStorage(_info);
            if(_type == DragTargetType.MAP)
            {
               isChange = true;
               DisplayUtil.removeForParent(_sprite);
               removeInMap(_info);
               localDeleteUsedList.push(_info);
            }
         }
      }
      
      private static function dragInNo() : void
      {
         DisplayUtil.removeForParent(_sprite);
         _sprite.alpha = 1;
         _sprite.x = _originPos.x;
         _sprite.y = _originPos.y;
         _sprite.mouseEnabled = true;
         _parent.addChild(_sprite);
      }
      
      public static function getUsedInfo(param1:uint) : void
      {
         var mapID:uint = param1;
         SocketConnection.addCmdListener(CommandID.FITMENT_USERING,function(param1:SocketEvent):void
         {
            var _loc7_:FitmentInfo = null;
            var _loc8_:FitmentInfo = null;
            SocketConnection.removeCmdListener(CommandID.FITMENT_USERING,arguments.callee);
            var _loc3_:Boolean = false;
            usedList = [];
            var _loc4_:ByteArray = param1.data as ByteArray;
            userID = _loc4_.readUnsignedInt();
            roomID = _loc4_.readUnsignedInt();
            var _loc5_:uint = _loc4_.readUnsignedInt();
            var _loc6_:int = 0;
            while(_loc6_ < _loc5_)
            {
               _loc7_ = new FitmentInfo();
               FitmentInfo.setFor10008(_loc7_,_loc4_);
               usedList.push(_loc7_);
               if(_loc7_.type == SolidType.FRAME)
               {
                  MapManager.styleID = _loc7_.id;
                  _loc3_ = true;
               }
               _loc6_++;
            }
            if(!_loc3_)
            {
               _loc8_ = new FitmentInfo();
               MapManager.styleID = MapManager.defaultRoomStyleID;
               _loc8_.id = MapManager.defaultRoomStyleID;
               usedList.push(_loc8_);
            }
            dispatchEvent(new FitmentEvent(FitmentEvent.USED_LIST,null));
         });
         SocketConnection.send(CommandID.FITMENT_USERING,mapID);
      }
      
      public static function addInMap(param1:FitmentInfo) : void
      {
         var _loc2_:FitmentInfo = new FitmentInfo();
         _loc2_.id = param1.id;
         _loc2_.pos = param1.pos.clone();
         _loc2_.dir = param1.dir;
         _loc2_.status = param1.status;
         usedList.push(_loc2_);
         localAddUsedList.push(_loc2_);
         var _loc3_:int = localDeleteUsedList.indexOf(param1);
         if(_loc3_ != -1)
         {
            localDeleteUsedList.splice(_loc3_,1);
         }
         dispatchEvent(new FitmentEvent(FitmentEvent.ADD_TO_MAP,_loc2_));
      }
      
      public static function removeInMap(param1:FitmentInfo) : void
      {
         var _loc2_:int = usedList.indexOf(param1);
         if(_loc2_ != -1)
         {
            usedList.splice(_loc2_,1);
            dispatchEvent(new FitmentEvent(FitmentEvent.REMOVE_TO_MAP,param1));
         }
         var _loc3_:int = localAddUsedList.indexOf(param1);
         if(_loc3_ != -1)
         {
            localAddUsedList.splice(_loc3_,1);
         }
      }
      
      public static function getUsedList() : Array
      {
         return usedList;
      }
      
      public static function containsUsed(param1:uint) : Boolean
      {
         var id:uint = param1;
         return usedList.some(function(param1:FitmentInfo, param2:int, param3:Array):Boolean
         {
            if(id == param1.id)
            {
               return true;
            }
            return false;
         });
      }
      
      public static function clearUsed() : void
      {
         usedList = [];
      }
      
      public static function getStorageInfo() : void
      {
         SocketConnection.addCmdListener(CommandID.FITMENT_ALL,function(param1:SocketEvent):void
         {
            var _loc6_:FitmentInfo = null;
            SocketConnection.removeCmdListener(CommandID.FITMENT_ALL,arguments.callee);
            storageMap.clear();
            var _loc3_:ByteArray = param1.data as ByteArray;
            var _loc4_:int = int(_loc3_.readUnsignedInt());
            var _loc5_:int = 0;
            while(_loc5_ < _loc4_)
            {
               _loc6_ = new FitmentInfo();
               FitmentInfo.setFor10007(_loc6_,_loc3_);
               storageMap.add(_loc6_.id,_loc6_);
               _loc5_++;
            }
            dispatchEvent(new FitmentEvent(FitmentEvent.STORAGE_LIST,null));
            if(BufferRecordManager.getState(MainManager.actorInfo,366) == false)
            {
               if(containsAll(500501) && containsAll(500502) && containsAll(500503) && containsAll(500514) && containsAll(500740) && containsAll(500854))
               {
                  BufferRecordManager.setState(MainManager.actorInfo,366,true);
                  return;
               }
               if(containsAll(500501) == false)
               {
                  SocketConnection.send(CommandID.BUY_FITMENT,500501,1);
               }
               if(containsAll(500502) == false)
               {
                  SocketConnection.send(CommandID.BUY_FITMENT,500502,1);
               }
               if(containsAll(500503) == false)
               {
                  SocketConnection.send(CommandID.BUY_FITMENT,500503,1);
               }
               if(containsAll(500514) == false)
               {
                  SocketConnection.send(CommandID.BUY_FITMENT,500514,1);
               }
               if(containsAll(500740) == false)
               {
                  SocketConnection.send(CommandID.BUY_FITMENT,500740,1);
               }
               if(containsAll(500854) == false)
               {
                  SocketConnection.send(CommandID.BUY_FITMENT,500854,1);
               }
            }
         });
         SocketConnection.send(CommandID.FITMENT_ALL);
      }
      
      public static function addInStorage(param1:FitmentInfo) : void
      {
         var _loc2_:FitmentInfo = storageMap.getValue(param1.id);
         if(_loc2_)
         {
            ++_loc2_.unUsedCount;
            dispatchEvent(new FitmentEvent(FitmentEvent.ADD_TO_STORAGE,_loc2_));
         }
         else
         {
            param1.allCount = 1;
            storageMap.add(param1.id,param1);
            dispatchEvent(new FitmentEvent(FitmentEvent.ADD_TO_STORAGE,param1));
         }
      }
      
      public static function removeInStorage(param1:uint) : void
      {
         var _loc2_:FitmentInfo = storageMap.getValue(param1);
         if(_loc2_)
         {
            if(_loc2_.unUsedCount > 1)
            {
               --_loc2_.allCount;
            }
            else
            {
               storageMap.remove(param1);
            }
            dispatchEvent(new FitmentEvent(FitmentEvent.REMOVE_TO_STORAGE,_loc2_));
         }
      }
      
      public static function getAllList() : Array
      {
         return storageMap.getValues();
      }
      
      public static function getUnUsedList() : Array
      {
         var data:Array = storageMap.getValues();
         return data.filter(function(param1:FitmentInfo, param2:int, param3:Array):Boolean
         {
            if(param1.unUsedCount > 0)
            {
               return true;
            }
            return false;
         });
      }
      
      public static function getUsedListForAll() : Array
      {
         var data:Array = storageMap.getValues();
         return data.filter(function(param1:FitmentInfo, param2:int, param3:Array):Boolean
         {
            if(param1.usedCount > 0)
            {
               return true;
            }
            return false;
         });
      }
      
      public static function getUnUsedListForType(param1:uint) : Array
      {
         var t:uint = param1;
         var data:Array = storageMap.getValues();
         if(t == SolidType.SUPER)
         {
            if(MainManager.actorInfo.vip == 1)
            {
               return data.filter(function(param1:FitmentInfo, param2:int, param3:Array):Boolean
               {
                  if(param1.unUsedCount > 0)
                  {
                     if(ItemXMLInfo.getIsSuper(param1.id))
                     {
                        return true;
                     }
                  }
                  return false;
               });
            }
            return [];
         }
         return data.filter(function(param1:FitmentInfo, param2:int, param3:Array):Boolean
         {
            if(param1.unUsedCount > 0)
            {
               if(param1.type == t)
               {
                  if(!ItemXMLInfo.getIsSuper(param1.id))
                  {
                     return true;
                  }
               }
            }
            return false;
         });
      }
      
      public static function containsStorage(param1:uint) : Boolean
      {
         var _loc2_:FitmentInfo = storageMap.getValue(param1);
         if(_loc2_)
         {
            if(_loc2_.unUsedCount > 0)
            {
               return true;
            }
         }
         return false;
      }
      
      public static function containsAll(param1:uint) : Boolean
      {
         return storageMap.containsKey(param1);
      }
      
      public static function getItemNumByID(param1:uint) : int
      {
         var _loc2_:FitmentInfo = storageMap.getValue(param1);
         if(_loc2_ != null)
         {
            return _loc2_.allCount;
         }
         return 0;
      }
      
      public static function clearAll() : void
      {
         return storageMap.clear();
      }
      
      public static function destroy() : void
      {
         _sprite = null;
         _parent = null;
         _info = null;
         storagePanel = null;
         _flomc = null;
         _wapmc = null;
         localAddUsedList = null;
         localDeleteUsedList = null;
      }
      
      private static function getInstance() : EventDispatcher
      {
         if(_instance == null)
         {
            _instance = new EventDispatcher();
         }
         return _instance;
      }
      
      public static function addEventListener(param1:String, param2:Function, param3:Boolean = false, param4:int = 0, param5:Boolean = false) : void
      {
         getInstance().addEventListener(param1,param2,param3,param4,param5);
      }
      
      public static function removeEventListener(param1:String, param2:Function, param3:Boolean = false) : void
      {
         getInstance().removeEventListener(param1,param2,param3);
      }
      
      public static function dispatchEvent(param1:Event) : void
      {
         if(hasEventListener(param1.type))
         {
            getInstance().dispatchEvent(param1);
         }
      }
      
      public static function hasEventListener(param1:String) : Boolean
      {
         return getInstance().hasEventListener(param1);
      }
      
      public static function willTrigger(param1:String) : Boolean
      {
         return getInstance().willTrigger(param1);
      }
   }
}
