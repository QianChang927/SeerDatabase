package com.robot.app.mapProcess
{
   import com.robot.app.control.GreenHouseController;
   import com.robot.app.control.NewGreenHouseController;
   import com.robot.app.greenHouse.GreenHousePlantInfo;
   import com.robot.app.greenHouse.GreenHouseUserInfo;
   import com.robot.app.homeToolBarPanel.NewGreenHousePlantBagPanel;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.xml.GreenHouseXMLInfo;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.DisplayObject;
   import flash.display.InteractiveObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.ui.Mouse;
   import flash.utils.setTimeout;
   import org.taomee.ds.HashMap;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class NewGreenHouseMap extends BaseMapProcess
   {
       
      
      private var _flower:Array;
      
      private var _tipsIoArr:Array;
      
      private var _listenerMap:HashMap;
      
      private var _bagPanel:NewGreenHousePlantBagPanel;
      
      private var _btnListMc:MovieClip;
      
      public function NewGreenHouseMap()
      {
         this._flower = new Array();
         super();
         super.setup();
      }
      
      override protected function init() : void
      {
         this._bagPanel = new NewGreenHousePlantBagPanel(conLevel["bagPanel"]);
         this._bagPanel.isShowPanel(false);
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalkEnter);
         MapManager.addEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapClick);
         MapManager.addEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapMouseDown);
         var _loc1_:int = 0;
         while(_loc1_ < 6)
         {
            this._flower[_loc1_] = new GreenHousePlantInfo();
            depthLevel["land_" + _loc1_]["plantMc"].visible = false;
            depthLevel["land_" + _loc1_]["landMc"].addEventListener(MouseEvent.CLICK,this.onFieldClick);
            depthLevel["land_" + _loc1_]["pro"].visible = false;
            depthLevel["land_" + _loc1_]["pro"].gotoAndStop(1);
            depthLevel["land_" + _loc1_]["matureFlag"].visible = false;
            if(depthLevel["empty_" + _loc1_])
            {
               depthLevel["empty_" + _loc1_].addEventListener(MouseEvent.CLICK,this.onEmptyClick);
            }
            _loc1_++;
         }
         this.initIcon();
         this.hideLevel();
         this.updateMap();
         SystemTimerManager.addTickFun(this.ontimerHandle);
         NewGreenHouseController.getInstance().addEventListener(NewGreenHouseController.getInstance().UPDATE_MAP_PLANTS,this.updatePlantInfo);
         NewGreenHouseController.getInstance().addEventListener(NewGreenHouseController.getInstance().PREPARE_USE_SEED,this.prepareUseSeed);
         NewGreenHouseController.getInstance().addEventListener(NewGreenHouseController.getInstance().TECHNOLOGY_UP,this.technologyUpHandle);
         EventManager.addEventListener(NewGreenHouseController.getInstance().PLANT_INFO_CHANGED,this.infoChanged);
         EventManager.addEventListener(GreenHouseController.USE_FRUIT,this.useFruit);
         EventManager.addEventListener("NewGreenHouseShopShow",this.shopShowHandle);
         depthLevel.addEventListener(MouseEvent.CLICK,this.onDepthClick);
         MainManager.actorModel.x = 210;
         MainManager.actorModel.y = 352;
         this.showAppModule("NewGreenHouseGuidePanel");
         if(this._btnListMc)
         {
            this._btnListMc.addEventListener(MouseEvent.CLICK,this.onBtnListClick);
         }
      }
      
      private function onBtnListClick(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "infoBtn":
            case "shopBtn":
               break;
            case "roomBtn":
               this.gotoFrontRoom();
         }
      }
      
      private function onEmptyClick(param1:MouseEvent) : void
      {
         var _loc2_:int = int(param1.currentTarget.name.split("_")[1]);
         Alarm.show("温室科技等级" + _loc2_ + "时解锁");
      }
      
      private function shopShowHandle(param1:Event) : void
      {
         this._bagPanel.destroyIcon();
         this._bagPanel.isShowPanel(false);
         this.showAppModule("NewGreenHouseSeedShopPanel");
      }
      
      private function useFruit(param1:DynamicEvent) : void
      {
         this._bagPanel.fruitUsed(int(param1.paramObject));
      }
      
      private function loadPlant(param1:int, param2:String) : void
      {
         var idx:int = param1;
         var path:String = param2;
         setTimeout(function():void
         {
            DisplayUtil.removeAllChild(depthLevel["land_" + idx]["plantMc"]["mc"]);
            loadPlantRes({
               "path":path,
               "parent":depthLevel["land_" + idx]["plantMc"]["mc"]
            });
         },200);
      }
      
      private function ontimerHandle() : void
      {
         var _loc2_:GreenHousePlantInfo = null;
         var _loc3_:int = 0;
         var _loc4_:int = 0;
         var _loc5_:int = 0;
         var _loc6_:Number = NaN;
         var _loc7_:String = null;
         var _loc1_:int = 0;
         while(_loc1_ < this._flower.length)
         {
            _loc2_ = this._flower[_loc1_] as GreenHousePlantInfo;
            if(Boolean(_loc2_) && _loc2_.id != 0)
            {
               _loc3_ = int(GreenHouseXMLInfo.getSeedMatureTime(_loc2_.id));
               _loc4_ = _loc3_ - (SystemTimerManager.time - _loc2_.updateTime);
               _loc5_ = Math.max(0,_loc4_);
               _loc6_ = Number((_loc3_ - _loc5_) * 100 / _loc3_);
               depthLevel["land_" + _loc1_]["matureFlag"].visible = false;
               if(_loc6_ < 21)
               {
                  depthLevel["land_" + _loc1_]["plantMc"].gotoAndStop(1);
                  depthLevel["land_" + _loc1_]["plantMc"].mature = false;
               }
               else if(_loc6_ < 100)
               {
                  depthLevel["land_" + _loc1_]["plantMc"].mature = false;
                  depthLevel["land_" + _loc1_]["plantMc"].gotoAndStop(2);
               }
               else
               {
                  depthLevel["land_" + _loc1_]["matureFlag"].visible = true;
                  if(depthLevel["land_" + _loc1_]["plantMc"].mature == null || !depthLevel["land_" + _loc1_]["plantMc"].mature)
                  {
                     this.showPlantInfo(_loc1_);
                     depthLevel["land_" + _loc1_]["plantMc"].mature = true;
                     depthLevel["land_" + _loc1_]["plantMc"].gotoAndStop(3);
                     _loc7_ = String(GreenHouseXMLInfo.getYiledingPlantSWFPath(_loc2_.id));
                     this.loadPlant(_loc1_,_loc7_);
                  }
               }
               if(_loc6_ < 100)
               {
                  if(depthLevel["land_" + _loc1_]["plantMc"]["water"] != null)
                  {
                     depthLevel["land_" + _loc1_]["plantMc"]["water"].visible = 0 == _loc2_.water;
                  }
                  if(depthLevel["land_" + _loc1_]["plantMc"]["energy"] != null)
                  {
                     depthLevel["land_" + _loc1_]["plantMc"]["energy"].visible = 0 == _loc2_.energy;
                  }
               }
               if(!(depthLevel["land_" + _loc1_]["plantMc"] as MovieClip).hasEventListener(MouseEvent.CLICK))
               {
                  (depthLevel["land_" + _loc1_]["plantMc"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onPlantClick);
               }
            }
            else
            {
               (depthLevel["land_" + _loc1_]["plantMc"] as MovieClip).removeEventListener(MouseEvent.CLICK,this.onPlantClick);
            }
            _loc1_++;
         }
      }
      
      private function technologyUpHandle(param1:Event) : void
      {
         this.updateMap();
      }
      
      private function onDepthClick(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.target.name);
         switch(_loc2_)
         {
            case "door_0":
               this.gotoFrontRoom();
         }
      }
      
      private function hideLevel() : void
      {
         LevelManager.iconLevel.visible = false;
         LevelManager.toolsLevel.visible = false;
      }
      
      private function showLevel() : void
      {
         LevelManager.iconLevel.visible = true;
         LevelManager.toolsLevel.visible = true;
      }
      
      private function initIcon() : void
      {
         this._tipsIoArr = new Array();
         this._listenerMap = new HashMap();
         this.addTip(btnLevel["seedShop"],"种子商店");
         this.addListener(MouseEvent.CLICK,btnLevel["seedShop"],this.onShopClick);
         this.addTip(btnLevel["greenhouseBag"],"温室背包");
         this.addListener(MouseEvent.CLICK,btnLevel["greenhouseBag"],this.onBagClick);
         this.addTip(btnLevel["greenhouseSt"],"温室科技");
         this.addListener(MouseEvent.CLICK,btnLevel["greenhouseSt"],this.onSTClick);
         this.addTip(btnLevel["guide"],"操作指南");
         this.addListener(MouseEvent.CLICK,btnLevel["guide"],this.onGuideClick);
         MainManager.actorModel.pos = new Point(120,220);
         this._btnListMc = UIManager.getMovieClip("Room_btnlist_Mc");
         this._btnListMc.x = 0;
         this._btnListMc.y = 0;
         LevelManager.iconLevel.addChild(this._btnListMc);
         this._btnListMc.gotoAndStop(3);
      }
      
      private function updateMap() : void
      {
         NewGreenHouseController.getInstance().updateUserInfo().then(function():void
         {
            showLand();
            showPlants();
         });
      }
      
      private function showLand() : void
      {
         var _loc1_:GreenHouseUserInfo = NewGreenHouseController.getInstance().userInfo;
         var _loc2_:int = int(GreenHouseXMLInfo.getLandQuantity(null != _loc1_ ? _loc1_.stLevel : 1));
         var _loc3_:int = 0;
         while(_loc3_ < 6)
         {
            depthLevel["land_" + _loc3_]["arrowMc"].visible = false;
            depthLevel["land_" + _loc3_]["landMc"].visible = _loc3_ < _loc2_;
            if(depthLevel["empty_" + _loc3_])
            {
               depthLevel["empty_" + _loc3_].visible = _loc3_ >= _loc2_;
            }
            _loc3_++;
         }
      }
      
      public function showPlants() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < 6)
         {
            this.showPlantInfo(_loc1_);
            _loc1_++;
         }
      }
      
      private function showPlantInfo(param1:int) : void
      {
         var plantIdx:int = param1;
         NewGreenHouseController.getInstance().getPlantInfo(plantIdx).then(function(param1:GreenHousePlantInfo):void
         {
            var _loc2_:* = param1.id != 0;
            if(!_loc2_)
            {
               depthLevel["land_" + plantIdx]["plantMc"].mature = null;
               depthLevel["land_" + plantIdx]["matureFlag"].visible = false;
            }
            if(param1 != null)
            {
               _flower[plantIdx] = param1;
               ontimerHandle();
            }
            depthLevel["land_" + plantIdx]["plantMc"].visible = _loc2_;
         });
      }
      
      private function loadPlantRes(param1:Object) : void
      {
         var obj:Object = param1;
         ResourceManager.getResource(obj.path,function(param1:DisplayObject):void
         {
            enableIObj(param1 as InteractiveObject,false);
            obj.parent.addChild(param1);
         });
      }
      
      private function enableIObj(param1:InteractiveObject, param2:Boolean) : void
      {
         if(param1 == null)
         {
            return;
         }
         var _loc3_:Sprite = param1 as Sprite;
         if(_loc3_ != null)
         {
            _loc3_.mouseChildren = param2;
            _loc3_.mouseEnabled = param2;
         }
         var _loc4_:SimpleButton;
         if((_loc4_ = param1 as SimpleButton) != null)
         {
            _loc4_.mouseEnabled = param2;
            _loc4_.mouseChildren = param2;
         }
      }
      
      private function updatePlantInfo(param1:Event = null) : void
      {
         this.showPlants();
      }
      
      private function prepareUseSeed(param1:Event = null) : void
      {
         var _loc2_:int = 0;
         while(_loc2_ < NewGreenHouseController.getInstance().userInfo.newLand)
         {
            depthLevel["land_" + _loc2_]["arrowMc"].visible = this._flower[_loc2_].id == 0;
            _loc2_++;
         }
      }
      
      private function onPlantClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var e:MouseEvent = param1;
         var ename:String = String(e.currentTarget.parent.name);
         index = int(ename.split("_")[1]);
         var info:GreenHousePlantInfo = this._flower[index];
         var matureTime:int = int(GreenHouseXMLInfo.getSeedMatureTime(info.id));
         var lettime:int = matureTime - (SystemTimerManager.time - info.updateTime);
         var tmp:int = Math.max(0,lettime);
         var growPercent:Number = Number((matureTime - tmp) * 100 / matureTime);
         if(tmp <= 0)
         {
            LevelManager.closeMouseEvent();
            depthLevel["land_" + index]["pro"].visible = true;
            AnimateManager.playMcAnimate(depthLevel["land_" + index]["pro"],1,"",function():void
            {
               LevelManager.openMouseEvent();
               depthLevel["land_" + index]["pro"].visible = false;
               SocketConnection.sendByQueue(43324,[8,2,index + 1,6],function(param1:SocketEvent):void
               {
                  showPlantInfo(index);
                  if(Boolean(_bagPanel) && _bagPanel.isOpend())
                  {
                     _bagPanel.updatePanel();
                  }
               });
            });
         }
         else
         {
            this.showAppModule("NewGreenHousePlantInfoPanel",index);
         }
      }
      
      private function onShopClick(param1:MouseEvent) : void
      {
         this.showAppModule("NewGreenHouseSeedShopPanel");
      }
      
      private function onBagClick(param1:MouseEvent) : void
      {
         this._bagPanel.isShowPanel(true);
      }
      
      private function onSTClick(param1:MouseEvent) : void
      {
         this.showAppModule("NewGreenHouseSTPanel");
      }
      
      private function onGuideClick(param1:MouseEvent) : void
      {
         this.showAppModule("NewGreenHouseGuidePanel");
      }
      
      private function showAppModule(param1:String, param2:Object = null) : void
      {
         this._bagPanel.destroyIcon();
         ModuleManager.showAppModule(param1,param2);
      }
      
      private function onFieldClick(param1:MouseEvent) : void
      {
         var itemId:int;
         var e:MouseEvent = param1;
         var index:int = int(e.currentTarget.parent.name.split("_")[1]);
         if(this._bagPanel.itemIcon == null && this._flower[index].id == 0)
         {
            this._bagPanel.isShowPanel(true);
            return;
         }
         if(this._bagPanel.itemIcon == null)
         {
            return;
         }
         itemId = int(this._bagPanel.itemIcon.itemId);
         if(this._flower[index].id == 0)
         {
            NewGreenHouseController.onPlant(index + 1,itemId).then(function():void
            {
               _bagPanel.destroyIcon();
               _bagPanel.updatePanel();
               updateMap();
            });
         }
      }
      
      private function addListener(param1:String, param2:DisplayObject, param3:Function) : void
      {
         param2 = param2 as InteractiveObject;
         if(param2 != null && param3 != null)
         {
            param2.addEventListener(param1,param3);
            this._listenerMap.add(param2.name,{
               "type":param1,
               "obj":param2,
               "fun":param3
            });
         }
      }
      
      private function removeAllListener() : void
      {
         var _loc2_:Object = null;
         var _loc1_:Array = this._listenerMap.getKeys();
         var _loc3_:int = 0;
         while(_loc3_ < _loc1_.length)
         {
            _loc2_ = this._listenerMap.getValue(_loc1_[_loc3_]);
            if(_loc2_ != null)
            {
               _loc2_.obj.removeEventListener(_loc2_.type,_loc2_.fun);
            }
            _loc3_++;
         }
         this._listenerMap.clear();
      }
      
      private function onWalkEnter(param1:RobotEvent) : void
      {
         var _loc2_:Point = new Point();
         _loc2_ = MainManager.actorModel.parent.globalToLocal(depthLevel["door_0"].localToGlobal(new Point(0,0)));
         if(depthLevel["door_0"] && Point.distance(_loc2_,MainManager.actorModel.pos) < 100 && Boolean(depthLevel["door_0"].visible))
         {
            MainManager.actorModel.stop();
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalkEnter);
            MapManager.removeEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapClick);
            this.gotoFrontRoom();
         }
      }
      
      private function onMapClick(param1:MapEvent) : void
      {
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalkEnter);
         MapManager.removeEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapClick);
      }
      
      public function gotoFrontRoom() : void
      {
         MapManager.changeMap(MainManager.actorInfo.mapID);
      }
      
      private function addTip(param1:InteractiveObject, param2:String) : void
      {
         if(param1 != null)
         {
            ToolTipManager.add(param1,param2);
            this._tipsIoArr.push(param1);
         }
      }
      
      private function destoryTip() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < this._tipsIoArr.length)
         {
            if(this._tipsIoArr != null)
            {
               ToolTipManager.remove(this._tipsIoArr[_loc1_]);
            }
            _loc1_++;
         }
         this._tipsIoArr = null;
      }
      
      private function onMapMouseDown(param1:MapEvent) : void
      {
         Mouse.show();
         this._bagPanel.destroyIcon();
      }
      
      private function infoChanged(param1:DynamicEvent) : void
      {
         var _loc2_:int = int(param1.paramObject);
         this.showPlantInfo(_loc2_ - 1);
      }
      
      override public function destroy() : void
      {
         SystemTimerManager.removeTickFun(this.ontimerHandle);
         this.removeAllListener();
         var _loc1_:int = 0;
         while(_loc1_ < 6)
         {
            (depthLevel["land_" + _loc1_]["plantMc"] as MovieClip).removeEventListener(MouseEvent.CLICK,this.onPlantClick);
            depthLevel["land_" + _loc1_]["landMc"].removeEventListener(MouseEvent.CLICK,this.onFieldClick);
            if(depthLevel["empty_" + _loc1_])
            {
               depthLevel["empty_" + _loc1_].removeEventListener(MouseEvent.CLICK,this.onEmptyClick);
            }
            _loc1_++;
         }
         if(MainManager.actorModel.hasEventListener(RobotEvent.WALK_ENTER_FRAME))
         {
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalkEnter);
         }
         if(MapManager.hasEventListener(MapEvent.MAP_MOUSE_DOWN))
         {
            MapManager.removeEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapClick);
         }
         MapManager.removeEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapMouseDown);
         this.destoryTip();
         this.showLevel();
         NewGreenHouseController.getInstance().removeEventListener(NewGreenHouseController.getInstance().UPDATE_MAP_PLANTS,this.updatePlantInfo);
         NewGreenHouseController.getInstance().removeEventListener(NewGreenHouseController.getInstance().PREPARE_USE_SEED,this.prepareUseSeed);
         NewGreenHouseController.getInstance().removeEventListener(NewGreenHouseController.getInstance().TECHNOLOGY_UP,this.technologyUpHandle);
         EventManager.removeEventListener(NewGreenHouseController.getInstance().PLANT_INFO_CHANGED,this.infoChanged);
         EventManager.removeEventListener(GreenHouseController.USE_FRUIT,this.useFruit);
         EventManager.removeEventListener("NewGreenHouseShopShow",this.shopShowHandle);
         NewGreenHouseController.getInstance().destory();
         depthLevel.removeEventListener(MouseEvent.CLICK,this.onDepthClick);
         this._flower = null;
         DisplayUtil.removeForParent(this._btnListMc);
         this._btnListMc = null;
         super.destroy();
      }
   }
}
