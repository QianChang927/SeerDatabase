package com.robot.app.task.petstory.util
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.app.buyItem.ItemInBagMsgManager;
   import com.robot.app.buyItem.ProductAction;
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.magicPassword.GiftItemInfo;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.CountermarkXMLInfo;
   import com.robot.core.config.xml.GoldProductXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.MoneyProductXMLInfo;
   import com.robot.core.config.xml.PetAdvanceXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.config.xml.SuitXMLInfo;
   import com.robot.core.controller.CountermarkController;
   import com.robot.core.controller.GetPetController;
   import com.robot.core.error.PromiseError;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.AchieveInfo;
   import com.robot.core.info.AchieveTitleInfo;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.info.pet.PetShowInfo;
   import com.robot.core.info.userItem.CountermarkInfo;
   import com.robot.core.info.userItem.CountermarkItemInfo;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.mode.PetModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.ui.alert.PetInBagAlert;
   import com.robot.core.ui.alert.PetInStorageAlert;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.Bitmap;
   import flash.display.DisplayObject;
   import flash.display.DisplayObjectContainer;
   import flash.display.InteractiveObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.KeyboardEvent;
   import flash.events.MouseEvent;
   import flash.external.ExternalInterface;
   import flash.filters.GlowFilter;
   import flash.geom.ColorTransform;
   import flash.geom.Point;
   import flash.geom.Rectangle;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   import flash.net.registerClassAlias;
   import flash.ui.Keyboard;
   import flash.utils.ByteArray;
   import flash.utils.Endian;
   import flash.utils.getDefinitionByName;
   import flash.utils.getQualifiedClassName;
   import org.taomee.debug.DebugTrace;
   import org.taomee.ds.HashMap;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketErrorEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.BitUtil;
   import org.taomee.utils.DisplayUtil;
   
   public class KTool
   {
      
      private static var pet:PetModel;
      
      private static var adjustObj:DisplayObject;
      
      private static var dragObjList:Array;
      
      private static var dragBtnList:Array;
      
      private static const SHOW_VIRTUALITEM_ARR:Array = [1400073,1400351,1400362,1400362,1400367,1400368];
      
      private static var _buyMoneyProductSkipInfo:HashMap = new HashMap();
      
      public static var _map:MapModel;
      
      public static var _taskMc:MovieClip;
      
      public static var randomSeed:int = 0;
       
      
      public function KTool()
      {
         super();
      }
      
      public static function hideMC(param1:Array, param2:Boolean = false) : void
      {
         var _loc4_:DisplayObject = null;
         var _loc3_:int = 0;
         while(_loc3_ < param1.length)
         {
            (_loc4_ = param1[_loc3_]).visible = param2;
            _loc3_++;
         }
      }
      
      public static function getIsClothSuit(param1:int) : Boolean
      {
         var _loc3_:String = null;
         var _loc2_:Array = SuitXMLInfo.getCloths(param1);
         for each(_loc3_ in _loc2_)
         {
            if(MainManager.actorInfo.clothIDs.indexOf(parseInt(_loc3_)) == -1)
            {
               return false;
            }
         }
         return true;
      }
      
      public static function getBagisHaveClothSuit(param1:int, param2:Function) : void
      {
         var cArr:Array = null;
         var suitId:int = param1;
         var fun:Function = param2;
         cArr = SuitXMLInfo.getCloths(suitId);
         if(cArr == null)
         {
            Alarm2.show("哎哟！策划这张suit.xml套装的表没配哦！");
            return;
         }
         ItemManager.updateItems(cArr,function():void
         {
            var _loc1_:Array = new Array();
            var _loc2_:int = 0;
            while(_loc2_ < cArr.length)
            {
               _loc1_[_loc2_] = ItemManager.getNumByID(cArr[_loc2_]);
               if(_loc1_[_loc2_] <= 0)
               {
                  if(fun != null)
                  {
                     fun(false);
                     fun = null;
                  }
                  break;
               }
               _loc2_++;
            }
            if(fun != null)
            {
               fun(true);
            }
         });
      }
      
      public static function getisHaveClothSuit(param1:int, param2:Function) : void
      {
         var suitId:int = param1;
         var fun:Function = param2;
         getBagisHaveClothSuit(suitId,function(param1:Boolean):void
         {
            if(fun != null)
            {
               if(param1)
               {
                  fun(true);
               }
               else
               {
                  fun(getIsClothSuit(suitId));
               }
            }
         });
      }
      
      public static function getisHaveClothSuitParts(param1:int, param2:Function) : void
      {
         var suitId:int = param1;
         var fun:Function = param2;
         getBagisHaveClothSuitParts(suitId,function(param1:Boolean):void
         {
            if(fun != null)
            {
               if(param1)
               {
                  fun(true);
               }
               else
               {
                  fun(getIsClothParts(suitId));
               }
            }
         });
      }
      
      public static function showLog(param1:String) : void
      {
         if(ExternalInterface.available)
         {
            ExternalInterface.call("function trace(){console.log(\'" + param1 + "\')}");
         }
      }
      
      public static function getIsClothParts(param1:int) : Boolean
      {
         var _loc3_:String = null;
         var _loc2_:Array = SuitXMLInfo.getCloths(param1);
         for each(_loc3_ in _loc2_)
         {
            if(MainManager.actorInfo.clothIDs.indexOf(parseInt(_loc3_)) >= 0)
            {
               return true;
            }
         }
         return false;
      }
      
      public static function getBagisHaveClothSuitParts(param1:int, param2:Function) : void
      {
         var cArr:Array = null;
         var suitId:int = param1;
         var fun:Function = param2;
         cArr = SuitXMLInfo.getCloths(suitId);
         if(cArr == null)
         {
            Alarm2.show("哎哟！策划这张suit.xml套装的表没配哦！");
            return;
         }
         ItemManager.updateItems(cArr,function():void
         {
            var _loc1_:Array = new Array();
            var _loc2_:int = 0;
            while(_loc2_ < cArr.length)
            {
               _loc1_[_loc2_] = ItemManager.getNumByID(cArr[_loc2_]);
               if(_loc1_[_loc2_] > 0)
               {
                  if(fun != null)
                  {
                     fun(true);
                     fun = null;
                  }
                  break;
               }
               _loc2_++;
            }
            if(fun != null)
            {
               fun(false);
            }
         });
      }
      
      public static function hideMapPlayerAndMonster() : void
      {
         OgreController.isShow = false;
         ToolBarController.showOrHideAllUser(false);
      }
      
      public static function showMapPlayerAndMonster() : void
      {
         OgreController.isShow = true;
         ToolBarController.showOrHideAllUser(ToolBarController.panel.panelIsShow);
      }
      
      public static function hideMapAllPlayerAndMonster() : void
      {
         OgreController.isShow = false;
         ToolBarController.showOrHideAllUser(false);
         MainManager.selfVisible = false;
      }
      
      public static function showMapAllPlayerAndMonster(param1:Boolean = true) : void
      {
         OgreController.isShow = param1;
         ToolBarController.showOrHideAllUser(ToolBarController.panel.panelIsShow);
         MainManager.selfVisible = param1;
      }
      
      public static function enableMC(param1:Array, param2:Boolean = false) : void
      {
         var _loc4_:InteractiveObject = null;
         var _loc3_:int = 0;
         while(_loc3_ < param1.length)
         {
            (_loc4_ = param1[_loc3_]).mouseEnabled = param2;
            if(_loc4_ is Sprite)
            {
               (_loc4_ as Sprite).mouseChildren = param2;
            }
            _loc3_++;
         }
      }
      
      public static function StringToPoint(param1:String) : Point
      {
         var _loc2_:Array = param1.split("|");
         var _loc3_:Point = new Point();
         _loc3_.x = _loc2_[0];
         _loc3_.y = _loc2_[1];
         return _loc3_;
      }
      
      public static function playFullMovie(param1:uint, param2:Function, param3:Boolean = true) : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getResPath("module/ext/movie/movie_" + param1 + ".swf"),param2,param3);
      }
      
      public static function firstPlayFullMovie(param1:uint, param2:Function, param3:String = "", param4:String = "", param5:Function = null) : void
      {
         var buffID:uint = param1;
         var Hide:Function = param2;
         var fullString:String = param3;
         var thisPanel:String = param4;
         var callBack:Function = param5;
         if(BitBuffSetClass.getState(buffID) == 0)
         {
            Hide();
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie(fullString),function():void
            {
               ModuleManager.showAppModule(thisPanel);
            });
            BitBuffSetClass.setState(buffID,1);
         }
         else if(callBack != null)
         {
            callBack();
         }
      }
      
      public static function clone(param1:Object) : *
      {
         var _loc2_:ByteArray = new ByteArray();
         _loc2_.writeObject(param1);
         _loc2_.position = 0;
         return _loc2_.readObject();
      }
      
      public static function isHideHeroAll(param1:Boolean) : void
      {
         if(param1)
         {
            MainManager.actorModel.visible = true;
            if(MainManager.actorModel.pet)
            {
               MainManager.actorModel.pet.visible = true;
            }
            if(MainManager.actorModel.nono)
            {
               MainManager.actorModel.showNono(MainManager.actorModel.nono.info,MainManager.actorInfo.actionType);
            }
         }
         else
         {
            MainManager.actorModel.visible = false;
            if(MainManager.actorModel.pet)
            {
               MainManager.actorModel.pet.visible = false;
            }
            if(MainManager.actorModel.nono)
            {
               MainManager.actorModel.hideNono();
            }
         }
      }
      
      public static function setButtonMode(param1:*, param2:Boolean) : void
      {
         if(null != param1 && Boolean(param1.hasOwnProperty("buttonMode")))
         {
            param1["buttonMode"] = param2;
         }
      }
      
      public static function showScore(param1:MovieClip, param2:uint, param3:uint = 0, param4:Boolean = false, param5:Boolean = false) : void
      {
         var _loc10_:uint = 0;
         var _loc11_:uint = 0;
         var _loc12_:Number = NaN;
         if(param1 == null)
         {
            return;
         }
         var _loc6_:uint = 0;
         var _loc7_:uint = param3 * 10;
         var _loc8_:Array;
         var _loc9_:uint = (_loc8_ = param2.toString().split("").reverse()).length;
         _loc6_ = 0;
         while(param1["num_" + _loc6_] != null)
         {
            param1["num_" + _loc6_].gotoAndStop(1 + _loc7_);
            param1["num_" + _loc6_].visible = param4;
            _loc6_++;
         }
         _loc6_ = 0;
         while(_loc6_ < _loc9_)
         {
            if(_loc8_[_loc6_] != undefined)
            {
               if(param1["num_" + _loc6_])
               {
                  param1["num_" + _loc6_].visible = true;
                  param1["num_" + _loc6_].gotoAndStop(uint(_loc8_[_loc6_]) + 1 + _loc7_);
               }
            }
            _loc6_++;
         }
         if(!param4 && param5)
         {
            _loc12_ = ((_loc11_ = (_loc10_ = Math.ceil((param1.getChildAt(0) as MovieClip).width)) * param1.numChildren) - _loc9_ * _loc10_) / 2;
            _loc6_ = 0;
            while(_loc6_ < _loc9_)
            {
               if(_loc8_[_loc6_] != undefined)
               {
                  if(param1["num_" + _loc6_])
                  {
                     (param1["num_" + _loc6_] as MovieClip).x = _loc12_ + (_loc9_ - _loc6_ - 1) * (_loc10_ + 2);
                  }
               }
               _loc6_++;
            }
         }
      }
      
      public static function expendItem(param1:uint, param2:uint = 1, param3:Function = null) : void
      {
         var id:uint = param1;
         var num:uint = param2;
         var func:Function = param3;
         var byte:ByteArray = new ByteArray();
         byte.writeUnsignedInt(1);
         byte.writeUnsignedInt(id);
         byte.writeUnsignedInt(num);
         SocketConnection.addCmdListener(CommandID.ITEM_EXPEND,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.ITEM_EXPEND,arguments.callee);
            if(func != null)
            {
               func();
            }
         });
         SocketConnection.send(CommandID.ITEM_EXPEND,byte);
      }
      
      public static function petFollow(param1:uint) : void
      {
         var _loc2_:PetShowInfo = new PetShowInfo();
         _loc2_.petID = param1;
         MainManager.actorModel.showPet(_loc2_);
         MainManager.actorModel.pet.mouseEnabled = false;
         MainManager.actorModel.pet.mouseChildren = false;
      }
      
      public static function petDestroy() : void
      {
         if(pet)
         {
            pet.destroy();
            pet = null;
         }
         if(MainManager.actorModel.pet)
         {
            PetManager.showingInfo = null;
            MainManager.actorModel.pet.mouseEnabled = true;
            MainManager.actorModel.pet.mouseChildren = true;
            MainManager.actorModel.hidePet();
         }
      }
      
      public static function removeChildFormContainer(param1:DisplayObjectContainer, param2:String) : void
      {
         var _loc3_:uint = 0;
         var _loc4_:String = null;
         var _loc5_:Array = null;
         var _loc6_:String = null;
         if(param1)
         {
            _loc3_ = 0;
            while(_loc3_ < param1.numChildren)
            {
               _loc5_ = (_loc4_ = getQualifiedClassName(param1.getChildAt(_loc3_))).split(".");
               if((_loc6_ = String(_loc5_[_loc5_.length - 1])) == param2)
               {
                  param1.removeChild(param1.getChildAt(_loc3_));
                  break;
               }
               _loc3_++;
            }
         }
      }
      
      public static function hideChildFormContainer(param1:DisplayObjectContainer, param2:String) : void
      {
         var _loc3_:uint = 0;
         var _loc4_:String = null;
         var _loc5_:Array = null;
         var _loc6_:String = null;
         if(param1)
         {
            _loc3_ = 0;
            while(_loc3_ < param1.numChildren)
            {
               _loc5_ = (_loc4_ = getQualifiedClassName(param1.getChildAt(_loc3_))).split(".");
               if((_loc6_ = String(_loc5_[_loc5_.length - 1])) == param2)
               {
                  (param1.getChildAt(_loc3_) as DisplayObject).visible = false;
                  break;
               }
               _loc3_++;
            }
         }
      }
      
      public static function getFrameMc(param1:MovieClip, param2:Object, param3:String = "", param4:Function = null) : void
      {
         var child:DisplayObject = null;
         var parentMC:MovieClip = param1;
         var frame:Object = param2;
         var name:String = param3;
         var func:Function = param4;
         parentMC.gotoAndStop(frame);
         if(name == "")
         {
            child = parentMC.getChildAt(0) as DisplayObject;
         }
         else
         {
            child = parentMC.getChildByName(name) as DisplayObject;
         }
         if(child)
         {
            if(func != null)
            {
               func(child);
            }
         }
         else
         {
            parentMC.addEventListener(Event.ENTER_FRAME,function():void
            {
               if(name == "")
               {
                  child = parentMC.getChildAt(0) as DisplayObject;
               }
               else
               {
                  child = parentMC.getChildByName(name) as DisplayObject;
               }
               if(child)
               {
                  parentMC.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                  if(func != null)
                  {
                     func(child);
                  }
               }
            });
         }
      }
      
      public static function setAlignMid(param1:DisplayObject, param2:Number, param3:Number) : void
      {
         param1.x = (960 - param2) / 2;
         param1.y = (560 - param3) / 2;
      }
      
      public static function setPanelMid(param1:DisplayObject) : void
      {
         param1.x = int(960 - param1.width) / 2;
         param1.y = int(560 - param1.height) / 2;
      }
      
      public static function readDataByBits(param1:ByteArray, param2:uint) : Array
      {
         var _loc4_:uint = 0;
         var _loc5_:uint = 0;
         var _loc6_:int = 0;
         var _loc3_:Array = [];
         if(param2 == 8)
         {
            _loc4_ = param1.readUnsignedByte();
         }
         else if(param2 == 16)
         {
            _loc4_ = param1.readUnsignedShort();
         }
         else if(param2 == 32)
         {
            _loc4_ = param1.readUnsignedInt();
         }
         _loc6_ = 0;
         while(_loc6_ < param2)
         {
            _loc5_ = uint(_loc4_ & 1);
            _loc3_.push(_loc5_);
            _loc4_ >>= 1;
            _loc6_++;
         }
         return _loc3_;
      }
      
      public static function getRandom(param1:Array, param2:uint = 1) : Array
      {
         var _loc5_:int = 0;
         var _loc6_:uint = 0;
         if(!param1 || param2 > param1.length)
         {
            return null;
         }
         var _loc3_:Array = param1.concat();
         var _loc4_:Array = [];
         _loc5_ = 0;
         while(_loc5_ < param2)
         {
            _loc6_ = Math.floor(Math.random() * _loc3_.length);
            _loc4_.push(_loc3_[_loc6_]);
            _loc3_.splice(_loc6_,1);
            _loc5_++;
         }
         _loc3_ = null;
         return _loc4_;
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
      
      public static function checkPetInBag(param1:uint) : Boolean
      {
         var _loc2_:int = 0;
         var _loc3_:Boolean = false;
         var _loc4_:Array = PetManager.getBagMap();
         _loc2_ = 0;
         while(_loc2_ < _loc4_.length)
         {
            if((_loc4_[_loc2_] as PetListInfo).id == param1)
            {
               _loc3_ = true;
               break;
            }
            _loc2_++;
         }
         return _loc3_;
      }
      
      public static function checkCatchTimeInBag(param1:uint) : Boolean
      {
         var _loc2_:int = 0;
         var _loc3_:Boolean = false;
         var _loc4_:Array = PetManager.getBagMap();
         _loc2_ = 0;
         while(_loc2_ < _loc4_.length)
         {
            if((_loc4_[_loc2_] as PetListInfo).catchTime == param1)
            {
               _loc3_ = true;
               break;
            }
            _loc2_++;
         }
         return _loc3_;
      }
      
      public static function getCatchTimeInBag(param1:Array, param2:Boolean = false) : uint
      {
         var _loc3_:int = 0;
         var _loc4_:Array = PetManager.getBagMap(param2);
         _loc3_ = 0;
         while(_loc3_ < _loc4_.length)
         {
            if(param1.indexOf(_loc4_[_loc3_].id) >= 0)
            {
               return (_loc4_[_loc3_] as PetListInfo).catchTime;
            }
            _loc3_++;
         }
         return 0;
      }
      
      public static function adjustPosition(param1:DisplayObject) : void
      {
         if(!MainManager.isDebug)
         {
            return;
         }
         adjustObj = param1;
         LevelManager.stage.addEventListener(KeyboardEvent.KEY_DOWN,onKeyDown);
      }
      
      public static function onMouseDown(param1:MouseEvent) : void
      {
         (adjustObj as MovieClip).startDrag();
      }
      
      private static function onMouseUp(param1:MouseEvent) : void
      {
         DebugTrace.show("坐标(" + adjustObj.x + ", " + adjustObj.y + ")");
         (adjustObj as MovieClip).stopDrag();
      }
      
      public static function onKeyDown(param1:KeyboardEvent) : void
      {
         if(param1.keyCode == Keyboard.UP)
         {
            --adjustObj.y;
         }
         else if(param1.keyCode == Keyboard.DOWN)
         {
            adjustObj.y += 1;
         }
         else if(param1.keyCode == Keyboard.LEFT)
         {
            --adjustObj.x;
         }
         else if(param1.keyCode == Keyboard.RIGHT)
         {
            adjustObj.x += 1;
         }
         DebugTrace.show("坐标(" + adjustObj.x + ", " + adjustObj.y + ")");
      }
      
      public static function initDrag(param1:Sprite, param2:DisplayObject) : void
      {
         if(dragObjList == null)
         {
            dragObjList = [];
         }
         if(dragBtnList == null)
         {
            dragBtnList = [];
         }
         dragObjList.push(param1);
         dragBtnList.push(param2);
         param2.addEventListener(MouseEvent.MOUSE_DOWN,onDragDown);
         param2.addEventListener(MouseEvent.MOUSE_UP,onDragUp);
      }
      
      private static function onDragDown(param1:Event) : void
      {
         var _loc2_:int = dragBtnList.indexOf(param1.currentTarget);
         if(_loc2_ == -1)
         {
            return;
         }
         dragObjList[_loc2_].startDrag();
      }
      
      private static function onDragUp(param1:Event) : void
      {
         var _loc2_:int = dragBtnList.indexOf(param1.currentTarget);
         dragObjList[_loc2_].stopDrag();
      }
      
      public static function destroyDrag(param1:Sprite) : void
      {
         var _loc2_:int = dragBtnList.indexOf(param1);
         if(_loc2_ != -1)
         {
            dragObjList[_loc2_].stopDrag();
            dragBtnList[_loc2_].removeEventListener(MouseEvent.MOUSE_DOWN,onDragDown);
            dragBtnList[_loc2_].removeEventListener(MouseEvent.MOUSE_UP,onDragUp);
            dragObjList.splice(_loc2_,1);
            dragBtnList.splice(_loc2_,1);
            if(dragObjList.length == 0)
            {
               dragObjList = null;
            }
            if(dragBtnList.length == 0)
            {
               dragBtnList = null;
            }
         }
      }
      
      public static function getBit(param1:uint, param2:uint) : uint
      {
         return param1 >> param2 - 1 & 1;
      }
      
      public static function readBits(param1:uint, param2:uint, param3:uint) : uint
      {
         var _loc4_:uint = 0;
         var _loc5_:int = int(param2);
         while(_loc5_ <= param3)
         {
            _loc4_ += Math.pow(2,_loc5_ - 1);
            _loc5_++;
         }
         return _loc4_;
      }
      
      public static function getUint1Num(param1:uint) : uint
      {
         var _loc2_:uint = 0;
         do
         {
            _loc2_ += param1 & 1;
         }
         while(param1 = uint(param1 >>> 1));
         
         return _loc2_;
      }
      
      public static function getUintEnd1(param1:uint) : uint
      {
         var _loc2_:uint = 0;
         while(param1)
         {
            _loc2_++;
            param1 >>>= 1;
         }
         return _loc2_;
      }
      
      public static function getByte(param1:uint, param2:uint) : uint
      {
         if(param2 > 0)
         {
            return param1 >> 8 * param2 & 255;
         }
         return param1 & 255;
      }
      
      public static function subByte(param1:uint, param2:uint, param3:uint) : uint
      {
         var _loc5_:uint = 0;
         if(param3 + param2 > 32)
         {
            throw new Error("超出uint上限！");
         }
         if(param3 > 16)
         {
            return (_loc5_ = subByte(param1,param2,16)) + (subByte(param1 - _loc5_,param2 + 16,param3 - 16) << 16);
         }
         return uint(65535 >> 16 - param3 & param1 >> param2);
      }
      
      public static function doMultiExchange(param1:int, param2:int, param3:Function = null, param4:Function = null) : void
      {
         var id:int = param1;
         var num:int = param2;
         var callback:Function = param3;
         var errorFun:Function = param4;
         var cmdBackFun:Function = function(param1:SocketEvent):void
         {
            var _loc2_:ItemEvent = new ItemEvent(ItemEvent.EXCHANGE_END,id);
            ItemManager.dispatchEvent(_loc2_);
            onExchange(param1,callback);
         };
         SocketConnection.sendByQueue(CommandID.DO_MULIT_EXCHANGE,[id,num],cmdBackFun,errorFun);
      }
      
      public static function doExchange(param1:int, param2:Function = null, param3:Function = null) : Promise
      {
         var cmdBackFun:Function;
         var deferred:Deferred = null;
         var id:int = param1;
         var callback:Function = param2;
         var errorFun:Function = param3;
         deferred = new Deferred();
         LevelManager.appLevel.mouseEnabled = LevelManager.appLevel.mouseChildren = false;
         cmdBackFun = function(param1:SocketEvent):void
         {
            var e:SocketEvent = param1;
            var itemEvent:ItemEvent = new ItemEvent(ItemEvent.EXCHANGE_END,id);
            ItemManager.dispatchEvent(itemEvent);
            onExchange(e,function():void
            {
               LevelManager.appLevel.mouseEnabled = LevelManager.appLevel.mouseChildren = true;
               if(callback != null)
               {
                  callback();
               }
               deferred.resolve(true);
            });
         };
         SocketConnection.sendByQueue(CommandID.EXCHANGE_CLOTH_COMPLETE,[id],cmdBackFun,function():void
         {
            LevelManager.appLevel.mouseEnabled = LevelManager.appLevel.mouseChildren = true;
            if(errorFun != null)
            {
               errorFun();
            }
            deferred.reject(new PromiseError("exchangeError"));
         });
         return deferred.promise;
      }
      
      public static function onExchange(param1:SocketEvent, param2:Function) : void
      {
         var _loc7_:int = 0;
         var _loc8_:int = 0;
         var _loc3_:ByteArray = param1.data as ByteArray;
         _loc3_.position = 0;
         _loc3_.readUnsignedInt();
         _loc3_.readUnsignedInt();
         _loc3_.readUnsignedInt();
         var _loc4_:int = int(_loc3_.readUnsignedInt());
         var _loc5_:uint = _loc3_.readUnsignedInt();
         var _loc6_:uint = _loc3_.readUnsignedInt();
         var _loc9_:int = 0;
         while(_loc9_ < _loc6_)
         {
            _loc7_ = int(_loc3_.readUnsignedInt());
            _loc8_ = int(_loc3_.readUnsignedInt());
            if(Boolean(ItemXMLInfo.getIsMidleItem(_loc7_)) && !ItemInBagMsgManager.hasMsg(_loc7_))
            {
               break;
            }
            if(ItemXMLInfo.getCatID(_loc7_) != 14)
            {
               ItemInBagAlert.show(_loc7_,_loc8_ + "个" + TextFormatUtil.getRedTxt(ItemXMLInfo.getName(_loc7_)) + "已经放入你的储存箱！");
            }
            else if(_loc7_ == 1400352 || ItemInBagAlert.SPECIAL_ALERT_ITEM_IDS.indexOf(_loc7_) != -1)
            {
               ItemInBagAlert.show(_loc7_,_loc8_ + "个" + TextFormatUtil.getRedTxt(ItemXMLInfo.getName(_loc7_)) + "已经放入了你的储存箱！");
            }
            else if(SHOW_VIRTUALITEM_ARR.indexOf(_loc7_) >= 0)
            {
               Alarm.show("恭喜你获得了" + TextFormatUtil.getRedTxt(_loc8_.toString() + "个" + ItemXMLInfo.getName(_loc7_)) + "，已经放入你的储物箱中！");
            }
            else
            {
               ItemInBagMsgManager.showMsg(_loc7_,_loc8_);
            }
            if(_loc7_ == 1)
            {
               MainManager.actorInfo.coins += _loc8_;
            }
            _loc9_++;
         }
         var _loc10_:uint = _loc3_.readUnsignedInt();
         var _loc11_:int = 0;
         while(_loc11_ < _loc10_)
         {
            _loc7_ = int(_loc3_.readUnsignedInt());
            _loc8_ = int(_loc3_.readUnsignedInt());
            ItemInBagAlert.show(_loc7_,"恭喜你获得了" + _loc8_ + "个" + CountermarkXMLInfo.getDes(_loc7_) + "，已经放入了你的储物箱中！");
            _loc11_++;
         }
         if(_loc4_ != 0)
         {
            GetPetController.getPet(_loc4_,_loc5_,param2);
         }
         else if(param2 != null)
         {
            param2();
         }
      }
      
      public static function getLimitNum(param1:int, param2:Function) : void
      {
         var id:int = param1;
         var fun:Function = param2;
         SocketConnection.sendByQueue(CommandID.FUCK_SHINEHOO_TIMES,[id],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:int = int(_loc2_.readUnsignedInt());
            if(id == _loc4_)
            {
               if(null != fun)
               {
                  fun.call(null,_loc3_);
               }
            }
         });
      }
      
      public static function getForeverNum(param1:int, param2:Function) : void
      {
         var param:int = param1;
         var func:Function = param2;
         if(param == 0)
         {
            return;
         }
         SocketConnection.sendByQueue(41080,[param],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            if(null != func)
            {
               func(_loc2_.readUnsignedInt());
            }
         });
      }
      
      public static function getInfoByCommomd(param1:int, param2:Array, param3:Function = null) : Promise
      {
         var paramArr:ByteArray;
         var deferred:Deferred = null;
         var num:int = 0;
         var commondId:int = param1;
         var foreverArr:Array = param2;
         var func:Function = param3;
         deferred = new Deferred();
         if(null == foreverArr || foreverArr.length <= 0)
         {
            if(func != null)
            {
               func([]);
            }
            deferred.resolve([]);
            return deferred.promise;
         }
         paramArr = new ByteArray();
         for each(num in foreverArr)
         {
            paramArr.writeInt(num);
         }
         SocketConnection.sendByQueue(commondId,[foreverArr.length,paramArr],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:Array = new Array();
            var _loc5_:int = 0;
            while(_loc5_ < _loc3_)
            {
               _loc4_.push(_loc2_.readUnsignedInt());
               _loc5_++;
            }
            if(null != func)
            {
               func(_loc4_);
            }
            deferred.resolve(_loc4_);
         });
         return deferred.promise;
      }
      
      public static function getPlayerInfo(param1:Array, param2:Function = null) : Promise
      {
         var defered:Deferred = null;
         var infoArr:Array = param1;
         var func:Function = param2;
         defered = new Deferred();
         getInfoByCommomd(CommandID.GAME_GET_PLAYER_INFO,infoArr,function(param1:Array):void
         {
            if(func != null)
            {
               func(param1);
            }
            defered.resolve(param1);
         });
         return defered.promise;
      }
      
      public static function getMultiValue(param1:Array, param2:Function = null) : Promise
      {
         return getInfoByCommomd(CommandID.GET_MULTI_FOREVER,param1,param2);
      }
      
      public static function getMultiValueByDB(param1:Array, param2:Function = null) : Promise
      {
         return getInfoByCommomd(CommandID.GET_MULTI_FOREVER_BY_DB,param1,param2);
      }
      
      public static function getHasEverGotPetByPromise(param1:Array) : Promise
      {
         var deffer:Deferred = null;
         var petArr:Array = param1;
         deffer = new Deferred();
         getHasEverGotPet(petArr,function(param1:Array):void
         {
            deffer.resolve(param1);
         });
         return deffer.promise;
      }
      
      public static function getHasEverGotPet(param1:Array, param2:Function) : void
      {
         var sendArr:ByteArray;
         var petId:int = 0;
         var petArr:Array = param1;
         var func:Function = param2;
         if(null == petArr || petArr.length <= 0)
         {
            return;
         }
         sendArr = new ByteArray();
         for each(petId in petArr)
         {
            sendArr.writeUnsignedInt(petId);
         }
         SocketConnection.sendByQueue(CommandID.HAS_EVER_GET_PET_OR_JINGYUAN,[petArr.length,sendArr],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:Array = new Array();
            var _loc5_:int = 0;
            while(_loc5_ < _loc3_)
            {
               _loc4_.push(Boolean(_loc2_.readUnsignedInt()));
               _loc5_++;
            }
            if(null != func)
            {
               func(_loc4_);
            }
         });
      }
      
      public static function getIsHavingPet(param1:Array, param2:Function) : void
      {
         var sendArr:ByteArray;
         var petId:int = 0;
         var petArr:Array = param1;
         var func:Function = param2;
         if(null == petArr || petArr.length <= 0)
         {
            return;
         }
         sendArr = new ByteArray();
         for each(petId in petArr)
         {
            sendArr.writeUnsignedInt(petId);
         }
         SocketConnection.sendByQueue(CommandID.CHECK_IS_HAVING_PETS,[petArr.length,sendArr],function(param1:SocketEvent):void
         {
            var _loc5_:int = 0;
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:Array = new Array();
            _loc5_ = 0;
            while(_loc5_ < _loc3_)
            {
               _loc4_.push(_loc2_.readUnsignedInt());
               _loc5_++;
            }
            if(null != func)
            {
               func(_loc4_);
            }
         });
      }
      
      public static function getGlobalSubkeyValues(param1:int, param2:Array, param3:Function = null) : Promise
      {
         return getGlobalValues(param1,param2,param3);
      }
      
      public static function getGlobalValues(param1:int, param2:Array, param3:Function = null) : Promise
      {
         var sendArr:ByteArray;
         var deferred:Deferred = null;
         var subkey:int = 0;
         var key:int = param1;
         var subkeys:Array = param2;
         var func:Function = param3;
         deferred = new Deferred();
         if(key <= 0 || subkeys == null || subkeys.length == 0)
         {
            deferred.reject(new PromiseError());
            return deferred.promise;
         }
         sendArr = new ByteArray();
         for each(subkey in subkeys)
         {
            sendArr.writeUnsignedInt(subkey);
         }
         SocketConnection.sendByQueue(CommandID.GET_GLOBAL_VALUE,[key,subkeys.length,sendArr],function(param1:SocketEvent):void
         {
            var _loc5_:int = 0;
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:Array = new Array();
            _loc5_ = 0;
            while(_loc5_ < _loc3_)
            {
               _loc4_.push(_loc2_.readUnsignedInt());
               _loc5_++;
            }
            if(null != func)
            {
               func(_loc4_);
            }
            deferred.resolve(_loc4_);
         });
         return deferred.promise;
      }
      
      public static function getRangeRankList(param1:int, param2:int, param3:int, param4:int, param5:Function = null) : Promise
      {
         var deferred:Deferred = null;
         var key:int = param1;
         var subkey:int = param2;
         var start:int = param3;
         var end:int = param4;
         var func:Function = param5;
         if(key < 0)
         {
            deferred.reject(new PromiseError());
            return deferred.promise;
         }
         deferred = new Deferred();
         SocketConnection.sendByQueue(CommandID.GET_DAILY_RANK_INFO,[key,subkey,start,end],function(param1:SocketEvent):void
         {
            var _loc5_:int = 0;
            var _loc6_:String = null;
            var _loc7_:uint = 0;
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:Array = [];
            var _loc4_:int = int(_loc2_.readUnsignedInt());
            var _loc8_:int = 0;
            while(_loc8_ < _loc4_)
            {
               _loc5_ = int(_loc2_.readUnsignedInt());
               _loc7_ = _loc2_.readUnsignedInt();
               _loc6_ = _loc2_.readUTFBytes(16);
               _loc3_.push({
                  "userid":_loc5_,
                  "score":_loc7_,
                  "nick":_loc6_
               });
               _loc8_++;
            }
            if(null != func)
            {
               func(_loc3_);
            }
            deferred.resolve(_loc3_);
         });
         return deferred.promise;
      }
      
      public static function getBingLieRangeRankList(param1:int, param2:int, param3:int, param4:int, param5:Function = null) : Promise
      {
         var deferred:Deferred = null;
         var key:int = param1;
         var subkey:int = param2;
         var start:int = param3;
         var end:int = param4;
         var func:Function = param5;
         if(key < 0)
         {
            deferred.reject(new PromiseError());
            return deferred.promise;
         }
         deferred = new Deferred();
         SocketConnection.sendByQueue(CommandID.PETWAR_GET_RANK_LIST,[key,subkey,start,end],function(param1:SocketEvent):void
         {
            var _loc5_:int = 0;
            var _loc6_:String = null;
            var _loc7_:uint = 0;
            var _loc8_:uint = 0;
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:Array = [];
            var _loc4_:int = int(_loc2_.readUnsignedInt());
            var _loc9_:int = 0;
            while(_loc9_ < _loc4_)
            {
               _loc5_ = int(_loc2_.readUnsignedInt());
               _loc7_ = _loc2_.readUnsignedInt();
               _loc8_ = _loc2_.readUnsignedInt();
               _loc6_ = _loc2_.readUTFBytes(16);
               _loc3_.push({
                  "userid":_loc5_,
                  "rank":_loc8_,
                  "score":_loc7_,
                  "nick":_loc6_
               });
               _loc9_++;
            }
            if(null != func)
            {
               func(_loc3_);
            }
            deferred.resolve(_loc3_);
         });
         return deferred.promise;
      }
      
      public static function getMyRankPosition(param1:int, param2:int, param3:Boolean = true, param4:Function = null) : void
      {
         var key:int = param1;
         var subkey:int = param2;
         var ascend:Boolean = param3;
         var func:Function = param4;
         if(key < 0)
         {
            return;
         }
         SocketConnection.sendByQueue(CommandID.GET_MYDAILY_RANK_INFO,[key,subkey,ascend ? 1 : 0],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            if(null != func)
            {
               func(_loc2_.readInt());
            }
         });
      }
      
      public static function getMyRankAndScore(param1:int, param2:int, param3:Boolean, param4:Function = null) : void
      {
         var key:int = param1;
         var subkey:int = param2;
         var ascend:Boolean = param3;
         var func:Function = param4;
         if(key < 0)
         {
            return;
         }
         SocketConnection.sendByQueue(CommandID.PETWAR_GET_USER_RANK,[key,subkey,ascend ? 1 : 0],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            if(null != func)
            {
               func({
                  "rank":_loc2_.readInt(),
                  "score":_loc2_.readUnsignedInt()
               });
            }
         });
      }
      
      public static function getRankListLen(param1:int, param2:int, param3:Function = null) : void
      {
         var key:int = param1;
         var subkey:int = param2;
         var func:Function = param3;
         if(key < 0)
         {
            return;
         }
         SocketConnection.sendByQueue(CommandID.PETWAR_GET_RANK_LENGTH,[key,subkey],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            if(null != func)
            {
               func(_loc3_);
            }
         });
      }
      
      public static function getMyOrganizationRankAndScore(param1:int, param2:int, param3:int, param4:Boolean, param5:Function = null) : void
      {
         var rankingId:int = param1;
         var key:int = param2;
         var subkey:int = param3;
         var ascend:Boolean = param4;
         var func:Function = param5;
         if(rankingId < 0 || key < 0)
         {
            return;
         }
         SocketConnection.sendByQueue(45167,[rankingId,key,subkey,ascend ? 1 : 0],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:int = int(_loc2_.readUnsignedInt());
            if(null != func)
            {
               func({
                  "rank":_loc3_,
                  "score":_loc4_
               });
            }
         });
      }
      
      public static function getMultiMemberRankAndScore(param1:Array, param2:int, param3:int, param4:Boolean, param5:Function = null) : void
      {
         var sendArr:ByteArray;
         var id:int = 0;
         var arg:Array = param1;
         var key:int = param2;
         var subkey:int = param3;
         var ascend:Boolean = param4;
         var func:Function = param5;
         if(arg.length <= 0 || key < 0 || arg == null)
         {
            return;
         }
         sendArr = new ByteArray();
         for each(id in arg)
         {
            sendArr.writeUnsignedInt(id);
         }
         SocketConnection.sendByQueue(46348,[key,subkey,ascend ? 1 : 0,arg.length,sendArr],function(param1:SocketEvent):void
         {
            var _loc6_:int = 0;
            var _loc7_:int = 0;
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            _loc2_.readUnsignedInt();
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:Array = new Array();
            var _loc5_:int = 0;
            while(_loc5_ < _loc3_)
            {
               _loc6_ = int(_loc2_.readUnsignedInt());
               _loc7_ = int(_loc2_.readUnsignedInt());
               _loc4_.push({
                  "rank":_loc6_,
                  "score":_loc7_
               });
               _loc5_++;
            }
            if(null != func)
            {
               func(_loc4_);
            }
         });
      }
      
      public static function getOnlineUsersForeverOrDailyVal(param1:Array, param2:Function) : void
      {
         var arg:Array = param1;
         var func:Function = param2;
         if(null == arg || arg.length <= 0)
         {
            return;
         }
         SocketConnection.sendByQueue(CommandID.USER_FOREVER_VALUE,arg,function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            if(null != func)
            {
               func(_loc3_);
            }
         });
      }
      
      public static function initBenonoBtn(param1:*) : void
      {
         if(param1 is MovieClip)
         {
            if(MainManager.actorInfo.isVip)
            {
               param1.gotoAndStop(2);
            }
            else
            {
               param1.gotoAndStop(1);
            }
         }
         param1.addEventListener(MouseEvent.CLICK,beNono);
         SocketConnection.send(1022,86058569);
      }
      
      private static function beNono(param1:Event) : void
      {
         LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
         SocketConnection.send(1022,86052673);
      }
      
      public static function destroyBenonoBtn(param1:*) : void
      {
         param1.removeEventListener(MouseEvent.CLICK,beNono);
      }
      
      public static function initHelpnonoBtn(param1:SimpleButton) : void
      {
         param1.addEventListener(MouseEvent.CLICK,helpNono);
         if(!MainManager.actorInfo.isVip)
         {
            param1.visible = false;
         }
      }
      
      private static function onGetList(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.GET_HELP_LIST,onGetList);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == 0)
         {
            Alarm.show("当前没有好友请求您为其开通超能NONO！");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("FriendNonoPanel"),"正在加载...");
         }
      }
      
      private static function helpNono(param1:Event) : void
      {
         SocketConnection.send(1022,86052674);
         SocketConnection.addCmdListener(CommandID.GET_HELP_LIST,onGetList);
         SocketConnection.send(CommandID.GET_HELP_LIST);
      }
      
      public static function destroyHelpnonoBtn(param1:SimpleButton) : void
      {
         param1.removeEventListener(MouseEvent.CLICK,helpNono);
      }
      
      public static function addEffect(param1:InteractiveObject) : void
      {
         var _loc2_:GlowFilter = new GlowFilter(16776960,1,5,10,3,1);
         param1.filters = [_loc2_];
      }
      
      public static function getIndex(param1:Object) : int
      {
         var _loc2_:String = String(param1.name);
         var _loc3_:Array = _loc2_.split("_");
         return _loc3_[1] == null ? -1 : int(_loc3_[1]);
      }
      
      public static function showPackageGift(param1:Object) : void
      {
         var _loc2_:String = null;
         var _loc3_:int = 0;
         var _loc4_:int = 0;
         var _loc7_:int = 0;
         var _loc5_:Object = param1["item"];
         var _loc6_:Array = param1["pet"];
         _loc6_ = null == _loc6_ ? [] : _loc6_;
         for(_loc2_ in _loc5_)
         {
            _loc3_ = int(_loc5_[_loc2_]);
            ItemInBagAlert.show(parseInt(_loc2_),"恭喜你获得了" + _loc3_ + "个" + TextFormatUtil.getRedTxt(ItemXMLInfo.getName(parseInt(_loc2_))) + "，已经放入了你的储物箱中！");
         }
         _loc7_ = 0;
         while(_loc7_ < _loc6_.length)
         {
            if((_loc4_ = int(_loc6_[_loc7_])) != 0)
            {
               if(PetManager.length < 6)
               {
                  PetInBagAlert.show(_loc4_,PetXMLInfo.getName(_loc4_) + "已经放入了你的精灵背包！");
               }
               else
               {
                  PetInStorageAlert.show(_loc4_,PetXMLInfo.getName(_loc4_) + "已经放入了你的精灵仓库！");
               }
            }
            _loc7_++;
         }
      }
      
      public static function changeMapWithCallBack(param1:int, param2:Function) : void
      {
         var id:int = param1;
         var fun:Function = param2;
         if(Boolean(MapManager.currentMap) && MapManager.currentMap.id == id)
         {
            fun();
            return;
         }
         if(id >= 10001)
         {
            MapManager.changeLocalMap(id);
         }
         else
         {
            MapManager.changeMap(id);
         }
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:*):void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            fun();
         });
      }
      
      public static function setBrightness(param1:DisplayObject, param2:Number) : void
      {
         var _loc3_:ColorTransform = param1.transform.colorTransform;
         var _loc4_:* = param1.filters;
         if(param2 >= 0)
         {
            _loc3_.blueMultiplier = 1 - param2;
            _loc3_.redMultiplier = 1 - param2;
            _loc3_.greenMultiplier = 1 - param2;
            _loc3_.redOffset = 255 * param2;
            _loc3_.greenOffset = 255 * param2;
            _loc3_.blueOffset = 255 * param2;
         }
         else
         {
            param2 = Math.abs(param2);
            _loc3_.blueMultiplier = 1 - param2;
            _loc3_.redMultiplier = 1 - param2;
            _loc3_.greenMultiplier = 1 - param2;
            _loc3_.redOffset = 0;
            _loc3_.greenOffset = 0;
            _loc3_.blueOffset = 0;
         }
         param1.transform.colorTransform = _loc3_;
         param1.filters = _loc4_;
      }
      
      public static function formatString(param1:String, ... rest) : String
      {
         if(param1.indexOf("{") == -1)
         {
            return param1;
         }
         var _loc3_:* = "";
         var _loc4_:String = "";
         var _loc5_:uint = 0;
         for(; _loc5_ < param1.length; _loc5_++)
         {
            if(param1.charAt(_loc5_) == "{")
            {
               _loc5_++;
               _loc4_ = "";
               while(param1.charAt(_loc5_) != "}")
               {
                  _loc4_ += param1.charAt(_loc5_);
                  _loc5_++;
               }
               if(isNaN(parseInt(_loc4_)))
               {
                  _loc3_ += "{";
                  _loc5_ -= _loc4_.length + 1;
                  continue;
               }
               _loc5_++;
               _loc3_ += rest[parseInt(_loc4_)];
            }
            _loc3_ += param1.charAt(_loc5_);
         }
         return _loc3_;
      }
      
      public static function buyMiddleItem(param1:uint, param2:uint) : void
      {
         var itemId:uint = 0;
         var buyId:uint = param1;
         var exId:uint = param2;
         var arr:Array = GoldProductXMLInfo.getItemIDs(buyId);
         itemId = uint(arr[0]);
         ItemManager.upDateCollection(itemId,function():void
         {
            var _loc1_:SingleItemInfo = ItemManager.getCollectionInfo(itemId);
            if(_loc1_)
            {
               SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,exId);
            }
            else
            {
               ProductAction.buyMoneyProduct(buyId);
            }
         });
      }
      
      public static function buyMoneyProductWithSkip(param1:int, param2:String) : void
      {
         var productId:int = param1;
         var key:String = param2;
         if(_buyMoneyProductSkipInfo.getValue(key))
         {
            ProductAction.buyMoneyProduct(productId,1,null,true);
         }
         else
         {
            ProductAction.buyMoneyProduct(productId,1,null,false,true,function(param1:Boolean):void
            {
               _buyMoneyProductSkipInfo.add(key,param1);
            });
         }
      }
      
      public static function setMaxIndexInOtherChild(param1:DisplayObjectContainer, param2:DisplayObject, param3:Array) : void
      {
         var _loc6_:DisplayObject = null;
         var _loc4_:Array = [];
         var _loc5_:int = 0;
         while(_loc5_ < param3.length)
         {
            _loc6_ = param3[_loc5_];
            _loc4_[_loc5_] = param1.getChildIndex(_loc6_);
            _loc5_++;
         }
         _loc4_.sort(Array.DESCENDING);
         param1.setChildIndex(param2,_loc4_[0]);
      }
      
      public static function stopMcAll(param1:MovieClip) : void
      {
         var _loc3_:DisplayObject = null;
         var _loc4_:DisplayObjectContainer = null;
         var _loc5_:int = 0;
         var _loc6_:int = 0;
         var _loc2_:Array = [];
         _loc2_.push(param1);
         while(_loc2_.length != 0)
         {
            _loc3_ = _loc2_.pop();
            if(_loc3_ is DisplayObjectContainer)
            {
               if(_loc3_ is MovieClip)
               {
                  (_loc3_ as MovieClip).stop();
               }
               _loc4_ = _loc3_ as DisplayObjectContainer;
               _loc5_ = 0;
               _loc6_ = _loc4_.numChildren;
               while(_loc5_ < _loc6_)
               {
                  _loc2_.push(_loc4_.getChildAt(_loc5_));
                  _loc5_++;
               }
            }
         }
      }
      
      public static function buyProductWithExchange(param1:int, param2:int, param3:Function = null) : void
      {
         var pid:int = param1;
         var eid:int = param2;
         var callback:Function = param3;
         KTool.buyProductByCallback(pid,1,function():void
         {
            doExchange(eid,callback);
         });
      }
      
      public static function getBitSet(param1:Array, param2:Function = null) : Promise
      {
         var b:ByteArray;
         var i:uint;
         var deferred:Deferred = null;
         var paramArr:Array = param1;
         var fun:Function = param2;
         deferred = new Deferred();
         if(paramArr.length == 0)
         {
            if(fun != null)
            {
               fun([]);
            }
            deferred.resolve([]);
            return deferred.promise;
         }
         b = new ByteArray();
         i = 0;
         while(i < paramArr.length)
         {
            BitBuffSetClass.checkBitBuffBound(paramArr[i]);
            b.writeUnsignedInt(paramArr[i]);
            i++;
         }
         b.position = 0;
         SocketConnection.sendByQueue(CommandID.BATCH_GET_BITSET,[paramArr.length,b],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:uint = _loc2_.readUnsignedInt();
            var _loc4_:Array = [];
            var _loc5_:uint = 0;
            while(_loc5_ < _loc3_)
            {
               _loc4_.push(_loc2_.readUnsignedByte());
               _loc5_++;
            }
            if(fun != null)
            {
               fun.call(null,_loc4_);
            }
            deferred.resolve(_loc4_);
         });
         return deferred.promise;
      }
      
      public static function getHaveAchieve(param1:Array, param2:Function = null) : Promise
      {
         var b:ByteArray;
         var i:uint;
         var deferred:Deferred = null;
         var paramArr:Array = param1;
         var fun:Function = param2;
         deferred = new Deferred();
         if(paramArr.length == 0)
         {
            if(fun != null)
            {
               fun([]);
            }
            deferred.resolve([]);
            return deferred.promise;
         }
         b = new ByteArray();
         i = 0;
         while(i < paramArr.length)
         {
            b.writeUnsignedInt(paramArr[i]);
            i++;
         }
         b.position = 0;
         SocketConnection.sendByQueue(41425,[paramArr.length,b],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:uint = _loc2_.readUnsignedInt();
            var _loc4_:Array = [];
            var _loc5_:uint = 0;
            while(_loc5_ < _loc3_)
            {
               _loc4_.push(_loc2_.readUnsignedInt());
               _loc5_++;
            }
            if(fun != null)
            {
               fun.call(null,_loc4_);
            }
            deferred.resolve(_loc4_);
         });
         return deferred.promise;
      }
      
      public static function startMcAll(param1:MovieClip, param2:Boolean = true) : void
      {
         var _loc4_:DisplayObject = null;
         var _loc5_:DisplayObjectContainer = null;
         var _loc6_:int = 0;
         var _loc7_:int = 0;
         var _loc3_:Array = [];
         _loc3_.push(param1);
         while(_loc3_.length != 0)
         {
            if((_loc4_ = _loc3_.pop()) is DisplayObjectContainer)
            {
               if(_loc4_ is MovieClip)
               {
                  if(param2)
                  {
                     (_loc4_ as MovieClip).gotoAndPlay(1);
                  }
                  else
                  {
                     (_loc4_ as MovieClip).play();
                  }
               }
               _loc5_ = _loc4_ as DisplayObjectContainer;
               _loc6_ = 0;
               _loc7_ = _loc5_.numChildren;
               while(_loc6_ < _loc7_)
               {
                  _loc3_.push(_loc5_.getChildAt(_loc6_));
                  _loc6_++;
               }
            }
         }
      }
      
      public static function getIcon(param1:String, param2:int = 0, param3:Point = null, param4:String = "item") : DisplayObject
      {
         var result:Sprite = null;
         var url:String = param1;
         var width:int = param2;
         var centerPoint:Point = param3;
         var name:String = param4;
         result = new Sprite();
         centerPoint = null == centerPoint ? new Point(0,0) : centerPoint;
         ResourceManager.getResource(url,function(param1:DisplayObject):void
         {
            if(param1)
            {
               result.addChild(param1);
               if(width > 0)
               {
                  CommonUI.equalScale(param1,width,width);
               }
               if(centerPoint)
               {
                  CommonUI.centerAlign(param1,result,centerPoint);
               }
            }
         },name,3,false);
         return result;
      }
      
      public static function getPetIcon(param1:String, param2:int = 0, param3:String = "down", param4:Boolean = true, param5:Point = null, param6:String = "pet") : DisplayObject
      {
         var result:Sprite = null;
         var url:String = param1;
         var width:int = param2;
         var direction:String = param3;
         var useBitMap:Boolean = param4;
         var centerPoint:Point = param5;
         var name:String = param6;
         result = new Sprite();
         centerPoint = null == centerPoint ? new Point(0,0) : centerPoint;
         ResourceManager.getResource(url,function(param1:DisplayObject):void
         {
            var _loc2_:Bitmap = null;
            if(param1)
            {
               if(width != 0)
               {
                  CommonUI.equalScale(param1,width,width);
               }
               if(useBitMap)
               {
                  _loc2_ = DisplayUtil.copyDisplayAsBmp(param1);
                  result.addChild(_loc2_);
                  CommonUI.centerAlign(_loc2_,result,centerPoint);
               }
               else
               {
                  result.addChild(param1);
                  CommonUI.centerAlign(param1,result,centerPoint);
               }
            }
         },name,3,false);
         return result;
      }
      
      public static function getPetIcon2(param1:String, param2:int = 0, param3:String = "down", param4:Boolean = true, param5:Point = null, param6:String = "pet") : DisplayObject
      {
         var result:Sprite = null;
         var url:String = param1;
         var width:int = param2;
         var direction:String = param3;
         var useBitMap:Boolean = param4;
         var centerPoint:Point = param5;
         var name:String = param6;
         result = new Sprite();
         centerPoint = null == centerPoint ? new Point(0,0) : centerPoint;
         ResourceManager.getResource(url,function(param1:DisplayObject):void
         {
            var _loc2_:MovieClip = null;
            var _loc3_:Bitmap = null;
            if(param1)
            {
               _loc2_ = param1 as MovieClip;
               _loc2_.gotoAndStop(direction);
               if(width != 0)
               {
                  CommonUI.equalScale(_loc2_,width,width);
               }
               if(useBitMap)
               {
                  _loc3_ = DisplayUtil.copyDisplayAsBmp(_loc2_);
                  result.addChild(_loc3_);
                  CommonUI.centerAlign(_loc3_,result,centerPoint);
               }
               else
               {
                  result.addChild(_loc2_);
                  CommonUI.centerAlign(_loc2_,result,centerPoint);
               }
            }
         },name,3,false);
         return result;
      }
      
      public static function buyProductWithPromise(param1:int, param2:int = 1, param3:Boolean = false, param4:Boolean = true) : Promise
      {
         var deferred:Deferred = null;
         var pid:int = param1;
         var cnt:int = param2;
         var skipAlert:Boolean = param3;
         var checkItem:Boolean = param4;
         deferred = new Deferred();
         var sucess:Function = function():void
         {
            deferred.resolve(true);
         };
         var failed:Function = function():void
         {
            deferred.reject(new PromiseError());
         };
         buyProductByCallback(pid,cnt,sucess,null,failed,skipAlert,checkItem);
         return deferred.promise;
      }
      
      public static function buyProductByCallback(param1:int, param2:int = 1, param3:Function = null, param4:InteractiveObject = null, param5:Function = null, param6:Boolean = false, param7:Boolean = true) : void
      {
         var itemId:int = 0;
         var pid:int = param1;
         var cnt:int = param2;
         var fun:Function = param3;
         var obj:InteractiveObject = param4;
         var canelFun:Function = param5;
         var skipAlert:Boolean = param6;
         var checkItem:Boolean = param7;
         if(MoneyProductXMLInfo.containsPid(pid))
         {
            itemId = int(MoneyProductXMLInfo.getItemIDs(pid)[0]);
         }
         else
         {
            itemId = int(GoldProductXMLInfo.getItemIDs(pid)[0]);
         }
         if(obj != null)
         {
            enableMC([obj],false);
         }
         ItemManager.upDateCollection(itemId,function():void
         {
            var afterBuy:Function = null;
            var cancelBuy:Function = null;
            var exchangeId:int = 0;
            afterBuy = function(param1:DynamicEvent):void
            {
               EventManager.removeEventListener(RobotEvent.DIAMOND_BUY,afterBuy);
               EventManager.removeEventListener(RobotEvent.CANCEL_MONEY_BUY,cancelBuy);
               EventManager.removeEventListener(RobotEvent.MONEY_BUY,afterBuy);
               if(obj != null)
               {
                  enableMC([obj],true);
               }
               if(null != fun)
               {
                  fun();
               }
            };
            cancelBuy = function(param1:RobotEvent):void
            {
               EventManager.removeEventListener(RobotEvent.DIAMOND_BUY,afterBuy);
               EventManager.removeEventListener(RobotEvent.CANCEL_MONEY_BUY,cancelBuy);
               EventManager.removeEventListener(RobotEvent.MONEY_BUY,afterBuy);
               if(obj != null)
               {
                  enableMC([obj],true);
               }
               if(null != canelFun)
               {
                  canelFun();
               }
            };
            if(checkItem)
            {
               if(ItemManager.getNumByID(itemId) >= cnt && Boolean(ItemXMLInfo.getIsMidleItem(itemId)))
               {
                  DebugTrace.show("需要购买的中间道具" + itemId + "的数量为：" + ItemManager.getNumByID(itemId));
                  if(obj != null)
                  {
                     enableMC([obj],true);
                  }
                  exchangeId = int(ItemXMLInfo.getExchangeId(itemId));
                  if(exchangeId > 0)
                  {
                     doExchange(exchangeId,fun);
                  }
                  else if(null != fun)
                  {
                     fun();
                  }
                  return;
               }
            }
            ProductAction.buyMoneyProduct(pid,cnt,null,skipAlert);
            EventManager.addEventListener(RobotEvent.DIAMOND_BUY,afterBuy);
            EventManager.addEventListener(RobotEvent.MONEY_BUY,afterBuy);
            EventManager.addEventListener(RobotEvent.CANCEL_MONEY_BUY,cancelBuy);
         });
      }
      
      public static function buyOneClick(param1:Array, param2:int, param3:int, param4:String = null, param5:int = 0, param6:int = 1, param7:Function = null) : void
      {
         var items:Array = param1;
         var exchangeId:int = param2;
         var productId:int = param3;
         var alarmStr:String = param4;
         var index:int = param5;
         var num:int = param6;
         var func:Function = param7;
         ItemManager.updateItems(items,function():void
         {
            var itemNum:uint = uint(ItemManager.getNumByID(items[index]));
            if(itemNum > 0)
            {
               KTool.doExchange(exchangeId,function():void
               {
                  if(alarmStr != null)
                  {
                     Alarm.show(alarmStr);
                  }
                  if(func != null)
                  {
                     func();
                  }
               });
            }
            else
            {
               KTool.buyProductByCallback(productId,num,function():void
               {
                  KTool.doExchange(exchangeId,function():void
                  {
                     if(alarmStr != null)
                     {
                        Alarm.show(alarmStr);
                     }
                     if(func != null)
                     {
                        func();
                     }
                  });
               });
            }
         });
      }
      
      public static function checkMultiPetsClass(param1:Array, param2:Function) : void
      {
         var i:int;
         var result:Array = null;
         var len:uint = 0;
         var arr:Array = param1;
         var fun:Function = param2;
         result = [];
         len = arr.length;
         if(len == 0)
         {
            fun(result);
            return;
         }
         i = 0;
         while(i < len)
         {
            checkPetClass(arr[i],function(param1:uint):void
            {
               result.push(param1);
               if(result.length == len)
               {
                  fun(result);
               }
            });
            i++;
         }
      }
      
      public static function checkPetClass(param1:uint, param2:Function) : void
      {
         var id:uint = param1;
         var fun:Function = param2;
         SocketConnection.sendByQueue(CommandID.CHECK_PET_PETCLASS,[id],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:uint = _loc2_.readUnsignedInt();
            if(fun != null)
            {
               fun(_loc3_);
            }
         });
      }
      
      public static function checkMultiPetClass(param1:Array, param2:Function = null) : Promise
      {
         var tempArr:Array;
         var def:Deferred = null;
         var pets:Array = param1;
         var func:Function = param2;
         def = new Deferred();
         if(pets == null || pets.length == 0)
         {
            def.resolve([]);
            if(func != null)
            {
               func([]);
            }
            def.resolve([]);
            return def.promise;
         }
         tempArr = pets.slice();
         tempArr.unshift(pets.length);
         SocketConnection.sendByQueue(CommandID.CHECK_MULTI_PET_CLASS,tempArr,function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:Array = [];
            var _loc5_:int = 0;
            while(_loc5_ < _loc3_)
            {
               _loc4_.push(_loc2_.readByte());
               _loc5_++;
            }
            if(func != null)
            {
               func(_loc4_);
            }
            def.resolve(_loc4_);
         });
         return def.promise;
      }
      
      public static function centerAlign(param1:DisplayObject, param2:Sprite, param3:Point) : void
      {
         var _loc4_:Rectangle;
         var _loc5_:Number = (_loc4_ = CommonUI.getVisibility(param1,param2)).x - param1.x + param1.width / 2;
         var _loc6_:Number = _loc4_.y - param1.y + param1.height / 2;
         param1.x = param3.x - _loc5_;
         param1.y = param3.y - _loc6_;
      }
      
      public static function intTo4byte(param1:int) : Array
      {
         var _loc2_:Array = [];
         var _loc3_:ByteArray = new ByteArray();
         _loc3_.endian = Endian.LITTLE_ENDIAN;
         _loc3_.writeUnsignedInt(param1);
         _loc3_.position = 0;
         _loc2_[0] = _loc3_.readByte();
         _loc2_[1] = _loc3_.readByte();
         _loc2_[2] = _loc3_.readByte();
         _loc2_[3] = _loc3_.readByte();
         return _loc2_;
      }
      
      public static function intTo4Unsignedbyte(param1:int) : Array
      {
         var _loc2_:Array = [];
         var _loc3_:ByteArray = new ByteArray();
         _loc3_.endian = Endian.LITTLE_ENDIAN;
         _loc3_.writeUnsignedInt(param1);
         _loc3_.position = 0;
         _loc2_[0] = _loc3_.readUnsignedByte();
         _loc2_[1] = _loc3_.readUnsignedByte();
         _loc2_[2] = _loc3_.readUnsignedByte();
         _loc2_[3] = _loc3_.readUnsignedByte();
         return _loc2_;
      }
      
      public static function intTo2Short(param1:int) : Array
      {
         var _loc2_:Array = [];
         var _loc3_:ByteArray = new ByteArray();
         _loc3_.endian = Endian.LITTLE_ENDIAN;
         _loc3_.writeUnsignedInt(param1);
         _loc3_.position = 0;
         _loc2_[0] = _loc3_.readShort();
         _loc2_[1] = _loc3_.readShort();
         return _loc2_;
      }
      
      public static function intTo2UnsignedShort(param1:int) : Array
      {
         var _loc2_:Array = [];
         var _loc3_:ByteArray = new ByteArray();
         _loc3_.endian = Endian.LITTLE_ENDIAN;
         _loc3_.writeUnsignedInt(param1);
         _loc3_.position = 0;
         _loc2_[0] = _loc3_.readUnsignedShort();
         _loc2_[1] = _loc3_.readUnsignedShort();
         return _loc2_;
      }
      
      public static function arrayToInt(param1:Array) : Array
      {
         var _loc4_:ByteArray = null;
         var _loc5_:int = 0;
         var _loc2_:Array = [];
         var _loc3_:int = 0;
         while(_loc3_ < param1.length)
         {
            (_loc4_ = new ByteArray()).endian = Endian.LITTLE_ENDIAN;
            _loc5_ = _loc3_;
            while(_loc5_ < _loc3_ + 4)
            {
               if(param1[_loc5_])
               {
                  _loc4_.writeByte(param1[_loc5_]);
               }
               else
               {
                  _loc4_.writeByte(0);
               }
               _loc5_++;
            }
            _loc4_.position = 0;
            _loc2_.push(_loc4_.readUnsignedInt());
            _loc3_ += 4;
         }
         return _loc2_;
      }
      
      public static function superEvolution(param1:uint, param2:uint, param3:Function = null, param4:InteractiveObject = null) : void
      {
         var catchTime:uint = param1;
         var evolutionId:uint = param2;
         var fun:Function = param3;
         var obj:InteractiveObject = param4;
         if(obj != null)
         {
            enableMC([obj],false);
         }
         SocketConnection.sendWithCallback2(CommandID.PET_SUPER_EVOLUTION,function(param1:SocketEvent):void
         {
            if(obj != null)
            {
               enableMC([obj],true);
            }
            if(fun != null)
            {
               fun();
            }
         },[catchTime,evolutionId],function(param1:SocketErrorEvent):void
         {
            if(obj != null)
            {
               enableMC([obj],true);
            }
         });
      }
      
      public static function enableHideSkill(param1:uint, param2:uint, param3:Function = null, param4:InteractiveObject = null) : void
      {
         var catchTime:uint = param1;
         var skillId:uint = param2;
         var fun:Function = param3;
         var obj:InteractiveObject = param4;
         if(obj != null)
         {
            enableMC([obj],false);
         }
         SocketConnection.sendWithCallback2(CommandID.ENABLE_HIDE_SKILL,function(param1:SocketEvent):void
         {
            if(obj != null)
            {
               enableMC([obj],true);
            }
            if(fun != null)
            {
               fun();
            }
         },[catchTime,skillId],function(param1:SocketErrorEvent):void
         {
            if(obj != null)
            {
               enableMC([obj],true);
            }
         });
      }
      
      public static function socketSendCallBack(param1:int, param2:Function, param3:Array = null, param4:Function = null) : void
      {
         var cmdID:int = param1;
         var callback:Function = param2;
         var sendArgs:Array = param3;
         var errorCallback:Function = param4;
         LevelManager.appLevel.mouseEnabled = LevelManager.appLevel.mouseChildren = false;
         SocketConnection.sendWithCallback2(cmdID,function(param1:SocketEvent):void
         {
            if(callback != null)
            {
               callback(param1);
            }
            LevelManager.appLevel.mouseEnabled = LevelManager.appLevel.mouseChildren = true;
         },sendArgs,function(param1:SocketErrorEvent):void
         {
            if(errorCallback != null)
            {
               errorCallback(param1);
            }
            LevelManager.appLevel.mouseEnabled = LevelManager.appLevel.mouseChildren = true;
         });
      }
      
      public static function getAchieveIsCompelete(param1:int, param2:Array, param3:Function) : void
      {
         var list:Array = null;
         var branchId:int = param1;
         var ruleIdArr:Array = param2;
         var func:Function = param3;
         list = [];
         SocketConnection.addCmdListener(CommandID.ACHIEVEINFO,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.ACHIEVEINFO,arguments.callee);
            var _loc3_:AchieveInfo = param1.data as AchieveInfo;
            var _loc4_:int = 0;
            while(_loc4_ < ruleIdArr.length)
            {
               if(BitUtil.getBit(_loc3_.completeValue,ruleIdArr[_loc4_] - 1))
               {
                  list[_loc4_] = 1;
               }
               else
               {
                  list[_loc4_] = 0;
               }
               _loc4_++;
            }
            if(null != func)
            {
               func(list);
            }
         });
         SocketConnection.send(CommandID.ACHIEVEINFO,branchId);
      }
      
      public static function getAchieveTitileStatus(param1:Array, param2:Function = null) : Promise
      {
         var def:Deferred = null;
         var titleArr:Array = param1;
         var fun:Function = param2;
         def = new Deferred();
         SocketConnection.sendWithCallback(CommandID.ACHIEVETITLELIST,function(param1:SocketEvent):void
         {
            var _loc6_:int = 0;
            var _loc7_:* = false;
            var _loc2_:AchieveTitleInfo = param1.data as AchieveTitleInfo;
            var _loc3_:uint = titleArr.length;
            var _loc4_:Array = [];
            var _loc5_:int = 0;
            while(_loc5_ < _loc3_)
            {
               _loc7_ = (_loc6_ = int(_loc2_.titleArr.indexOf(titleArr[_loc5_]))) != -1;
               _loc4_.push(_loc7_);
               _loc5_++;
            }
            if(fun != null)
            {
               fun(_loc4_);
            }
            def.resolve(_loc4_);
         });
         return def.promise;
      }
      
      public static function playVideoFromThirdParty(param1:String) : void
      {
         if(ExternalInterface.available)
         {
            if(null == ExternalInterface.call("playMedia",param1,820,440))
            {
               navigateToURL(new URLRequest(param1),"_blank");
            }
         }
         else
         {
            navigateToURL(new URLRequest(param1),"_blank");
         }
      }
      
      public static function get onlineTime() : int
      {
         if(MainManager.onlineTimeValue == -1)
         {
            return MainManager.actorInfo.onlineTime;
         }
         return MainManager.onlineTimeValue + SystemTimerManager.time - MainManager.actorInfo.loginTime;
      }
      
      public static function exchangeMagicCode(param1:String, param2:Function = null) : void
      {
         var by:ByteArray;
         var sLen:int;
         var i:int;
         var txt:String = param1;
         var callback:Function = param2;
         if(txt.length < 12 || txt.length > 24)
         {
            Alarm.show("请输入正确的神奇密码！");
            return;
         }
         by = new ByteArray();
         sLen = txt.length;
         i = 0;
         while(i < sLen)
         {
            if(by.length > 32)
            {
               break;
            }
            by.writeUTFBytes(txt.charAt(i));
            i++;
         }
         SocketConnection.sendWithCallback(CommandID.GET_GIFT_COMPLETE,function(param1:SocketEvent):void
         {
            var _loc2_:GiftItemInfo = null;
            var _loc4_:int = 0;
            var _loc5_:String = null;
            _loc2_ = param1.data as GiftItemInfo;
            var _loc3_:Array = _loc2_.giftList;
            if(_loc3_.length > 0)
            {
               _loc4_ = 0;
               while(_loc4_ < _loc3_.length)
               {
                  if(_loc3_[_loc4_] == 1)
                  {
                     MainManager.actorInfo.coins += _loc2_.getCound(_loc3_[_loc4_]);
                  }
                  _loc5_ = String(TextFormatUtil.getRedTxt(ItemXMLInfo.getName(_loc3_[_loc4_]) + "x" + _loc2_.getCound(_loc3_[_loc4_])));
                  Alarm.show("兑换成功，" + _loc5_ + "已经放入你的储存箱，快去看看吧！");
                  _loc4_++;
               }
            }
            if(callback != null)
            {
               callback();
            }
         },by);
      }
      
      public static function getBagAbilityMarkById(param1:int, param2:Function = null, param3:Boolean = true) : void
      {
         var markID:int = param1;
         var callback:Function = param2;
         var isIncludePetBody:Boolean = param3;
         CountermarkController.getBagAbilityMarks(function(param1:Array):void
         {
            var _loc3_:CountermarkInfo = null;
            var _loc2_:Array = new Array();
            for each(_loc3_ in param1)
            {
               if(CountermarkXMLInfo.isUniversalMark(_loc3_.markID))
               {
                  if(_loc3_.markID == markID)
                  {
                     if(!isIncludePetBody)
                     {
                        if(_loc3_.isInstall)
                        {
                           continue;
                        }
                     }
                     _loc2_.push(_loc3_);
                  }
               }
            }
            if(callback != null)
            {
               callback(_loc2_);
            }
         });
      }
      
      public static function getPetInStallMarkInPetBag(param1:int, param2:Function = null) : void
      {
         var markID:int = param1;
         var callback:Function = param2;
         CountermarkController.getBagAbilityMarks(function(param1:Array):void
         {
            var _loc3_:CountermarkInfo = null;
            var _loc2_:Array = [];
            for each(_loc3_ in param1)
            {
               if(CountermarkXMLInfo.isUniversalMark(_loc3_.markID))
               {
                  if(_loc3_.markID == markID)
                  {
                     if(_loc3_.isInstall)
                     {
                        if(PetManager.defaultTime == _loc3_.catchTime)
                        {
                           _loc2_.push(_loc3_);
                        }
                     }
                  }
               }
            }
            if(callback != null)
            {
               callback(_loc2_);
            }
         });
      }
      
      public static function getPetInStallMarksInPetBag(param1:Array, param2:Function = null) : void
      {
         var markIDArr:Array = param1;
         var callback:Function = param2;
         CountermarkController.getBagAbilityMarks(function(param1:Array):void
         {
            var _loc3_:CountermarkInfo = null;
            var _loc2_:Array = [];
            for each(_loc3_ in param1)
            {
               if(CountermarkXMLInfo.isUniversalMark(_loc3_.markID))
               {
                  if(markIDArr.indexOf(_loc3_.markID) != -1)
                  {
                     if(_loc3_.isInstall)
                     {
                        if(PetManager.defaultTime == _loc3_.catchTime)
                        {
                           _loc2_.push(_loc3_);
                        }
                     }
                  }
               }
            }
            if(callback != null)
            {
               callback(_loc2_);
            }
         });
      }
      
      public static function getHasCountermarkByIds(param1:int, param2:int, param3:Function = null) : void
      {
         var startID:int = param1;
         var endID:int = param2;
         var callback:Function = param3;
         SocketConnection.sendWithPromise(CommandID.GET_COUNTERMARK_LIST2,[startID,endID]).then(function(param1:SocketEvent):void
         {
            var _loc6_:CountermarkItemInfo = null;
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:Array = [];
            var _loc5_:uint = 0;
            while(_loc5_ < _loc3_)
            {
               _loc6_ = new CountermarkItemInfo(_loc2_);
               _loc4_.push(_loc6_.obtainTime > 0 ? 1 : 0);
               _loc5_++;
            }
            if(callback != null)
            {
               callback(_loc4_);
            }
         });
      }
      
      public static function getDiamondNum() : Promise
      {
         return SocketConnection.sendWithPromise(CommandID.GOLD_CHECK_REMAIN,[]).then(function(param1:* = null):int
         {
            var _loc2_:* = param1.data;
            _loc2_.position = 0;
            return _loc2_.readUnsignedInt() / 100;
         });
      }
      
      public static function cloneObject(param1:Object) : *
      {
         var _loc2_:String = getQualifiedClassName(param1);
         var _loc3_:String = String(_loc2_.split("::")[0]);
         var _loc4_:Class = getDefinitionByName(_loc2_) as Class;
         registerClassAlias(_loc3_,_loc4_);
         var _loc5_:ByteArray;
         (_loc5_ = new ByteArray()).writeObject(param1);
         _loc5_.position = 0;
         return _loc5_.readObject();
      }
      
      public static function getResource(param1:String, param2:String, param3:int = 3, param4:Boolean = false) : Promise
      {
         var def:Deferred = null;
         var url:String = param1;
         var name:String = param2;
         var level:int = param3;
         var cache:Boolean = param4;
         def = new Deferred();
         ResourceManager.getResource(url,function(param1:*):void
         {
            def.resolve(param1);
         },name,level,cache);
         return def.promise;
      }
      
      public static function getLeftDay(param1:String, param2:String = null) : int
      {
         var _loc3_:Date = new Date(param1);
         var _loc4_:Date = !!param2 ? new Date(param2) : SystemTimerManager.sysDate;
         var _loc5_:int = Math.ceil((_loc3_.time - _loc4_.time) / 86400000);
         _loc3_ = _loc4_ = null;
         return _loc5_;
      }
      
      public static function showPetInfoPanel(param1:int) : void
      {
         ModuleManager.showAppModule("PetIntroducePanel",param1);
      }
      
      public static function playSceneAnimation(param1:String, param2:int = 1, param3:Function = null, param4:int = 0, param5:Boolean = true, param6:Boolean = true, param7:DisplayObject = null) : void
      {
         var name:String = param1;
         var index:int = param2;
         var callFun:Function = param3;
         var buffId:int = param4;
         var isRemove:Boolean = param5;
         var isShowToolBar:Boolean = param6;
         var parent:DisplayObject = param7;
         if(taskMc == null)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate(name),function(param1:MovieClip):void
            {
               taskMc = param1;
               _map = MapManager.currentMap;
               if(parent == null)
               {
                  _map.controlLevel.addChild(taskMc);
               }
               else
               {
                  LevelManager.stage.addChild(taskMc);
               }
               startPreTask(index,callFun,buffId,isRemove,isShowToolBar);
            });
         }
         else
         {
            startPreTask(index,callFun,buffId,isRemove,isShowToolBar);
         }
      }
      
      public static function startPreTask(param1:int, param2:Function, param3:int, param4:Boolean, param5:Boolean) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var index:int = param1;
         var callFun:Function = param2;
         var buffId:int = param3;
         var isRemove:Boolean = param4;
         var isShowToolBar:Boolean = param5;
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         ModuleManager.hideAllModule();
         getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,index,"mc" + index]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            var movefun:Function = null;
            storyPlayer.destory();
            movefun = function():void
            {
               DisplayUtil.removeForParent(taskMc);
               taskMc = null;
               if(isShowToolBar)
               {
                  LevelManager.iconLevel.visible = true;
                  ToolBarController.panel.visible = true;
               }
               getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(true);
               KTool.showMapAllPlayerAndMonster();
            };
            if(buffId != 0)
            {
               if(isRemove)
               {
                  BufferRecordManager.setMyState(buffId,true,function():void
                  {
                     movefun();
                     if(callFun != null)
                     {
                        callFun();
                     }
                  });
               }
               else
               {
                  BufferRecordManager.setMyState(buffId,true,function():void
                  {
                     if(callFun != null)
                     {
                        callFun(movefun);
                     }
                     else
                     {
                        movefun();
                     }
                  });
               }
            }
            else if(isRemove)
            {
               movefun();
               if(callFun != null)
               {
                  callFun();
               }
            }
            else if(callFun != null)
            {
               callFun(movefun);
            }
            else
            {
               movefun();
            }
         };
         storyPlayer.start();
      }
      
      public static function getRankinfos(param1:int, param2:int, param3:Array, param4:Function = null, param5:int = 1) : Promise
      {
         var paramArr:ByteArray;
         var deferred:Deferred = null;
         var num:int = 0;
         var key:int = param1;
         var subkey:int = param2;
         var idArr:Array = param3;
         var func:Function = param4;
         var order:int = param5;
         deferred = new Deferred();
         if(null == idArr || idArr.length <= 0)
         {
            if(func != null)
            {
               func([]);
            }
            deferred.resolve([]);
            return deferred.promise;
         }
         paramArr = new ByteArray();
         for each(num in idArr)
         {
            paramArr.writeInt(num);
         }
         SocketConnection.sendByQueue(46348,[key,subkey,order,idArr.length,paramArr],function(param1:SocketEvent):void
         {
            var _loc6_:int = 0;
            var _loc7_:int = 0;
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            _loc2_.readUnsignedInt();
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:Array = new Array();
            var _loc5_:int = 0;
            while(_loc5_ < _loc3_)
            {
               _loc6_ = int(_loc2_.readUnsignedInt());
               _loc7_ = _loc2_.readInt();
               _loc4_.push({
                  "rank":_loc6_,
                  "score":_loc7_
               });
               _loc5_++;
            }
            if(null != func)
            {
               func(_loc4_);
            }
            deferred.resolve(_loc4_);
         });
         return deferred.promise;
      }
      
      public static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      public static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      public static function checkHasAdvanced(param1:int, param2:int) : Promise
      {
         var deferred:Deferred = null;
         var pid:int = param1;
         var ct:int = param2;
         deferred = new Deferred();
         if(PetAdvanceXMLInfo.checkInAdvancedPet(pid))
         {
            SocketConnection.sendWithPromise(41805,[1,pid]).then(function(param1:SocketEvent):void
            {
               var _loc2_:int = int(ByteArray(param1.data).readUnsignedInt());
               _loc2_ = int(ByteArray(param1.data).readUnsignedInt());
               deferred.resolve(_loc2_ == ct);
            });
         }
         else
         {
            deferred.resolve(false);
         }
         return deferred.promise;
      }
      
      public static function random(param1:uint = 0) : Number
      {
         if(param1 != 0)
         {
            randomSeed = param1;
         }
         if(randomSeed == 0)
         {
            randomSeed = SystemTimerManager.time % 100 + 1;
         }
         randomSeed = (randomSeed * 9301 + 49297) % 233280;
         return randomSeed / 233280;
      }
   }
}
