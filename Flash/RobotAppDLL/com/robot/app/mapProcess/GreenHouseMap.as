package com.robot.app.mapProcess
{
   import com.robot.app.control.GreenHouseController;
   import com.robot.app.homeToolBarPanel.GreenHousePlantTip;
   import com.robot.app.homeToolBarPanel.HomeToolBarContoller;
   import com.robot.app.info.greenHouse.GreenHousePlantInfo;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.energyExchange.ExchangeOreModel;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.DialogBox;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.RectangleMask;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.filters.GlowFilter;
   import flash.geom.Rectangle;
   import flash.ui.Mouse;
   import flash.utils.Timer;
   import flash.utils.clearTimeout;
   import flash.utils.getDefinitionByName;
   import flash.utils.setTimeout;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.DepthManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class GreenHouseMap extends BaseMapProcess
   {
       
      
      private const PLANT:String = "plant";
      
      private const ENERGY:String = "energy";
      
      private const WATER:String = "water";
      
      private const REMOVE:String = "remove";
      
      private const REAP:String = "reap";
      
      private const RECLAIM:String = "reclaim";
      
      private var _item:MovieClip;
      
      private var _seedId:uint;
      
      private var _currentAction:String = "reclaim";
      
      private var _field:Array;
      
      private var _fieldMc:Array;
      
      private var _flower:Array;
      
      private var _map:SimpleButton;
      
      private var _goHome:SimpleButton;
      
      private var _store:SimpleButton;
      
      private var _seed:SimpleButton;
      
      private var _util:SimpleButton;
      
      private var _iconBg:MovieClip;
      
      private var _water:SimpleButton;
      
      private var _energy:SimpleButton;
      
      private var _remove:SimpleButton;
      
      private var _timer:Timer;
      
      private var _reaping:Boolean = false;
      
      private var filter:GlowFilter;
      
      public function GreenHouseMap()
      {
         this.filter = new GlowFilter(16711680,1,4,4);
         super();
      }
      
      private static function hideObject(param1:MapEvent) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_OBJECT_INIT_FINISH,hideObject);
         getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(false);
      }
      
      override protected function init() : void
      {
         var _loc1_:MovieClip = null;
         ToolTipManager.add(conLevel["water"],"蓄水池");
         conLevel["water"].gotoAndStop(1);
         ToolTipManager.add(conLevel["energy"],"肥料转化器");
         conLevel["energy"].gotoAndStop(1);
         conLevel["energy"].buttonMode = true;
         conLevel["energy"].addEventListener(MouseEvent.CLICK,this.onMachineClick);
         this.initIcon();
         MapManager.addEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapMouseDown);
         LevelManager.root.addEventListener(MouseEvent.MOUSE_MOVE,this.onMouseMove);
         this._field = [conLevel["field_0"],conLevel["field_1"],conLevel["field_2"],conLevel["field_3"],conLevel["field_4"],conLevel["field_5"],conLevel["field_6"],conLevel["field_7"],conLevel["field_8"]];
         for each(_loc1_ in this._field)
         {
            _loc1_.addEventListener(MouseEvent.MOUSE_OVER,this.onFieldOver);
            _loc1_.addEventListener(MouseEvent.MOUSE_OUT,this.onFieldOut);
            _loc1_.addEventListener(MouseEvent.CLICK,this.onFieldClick);
         }
         this._fieldMc = [conLevel["fieldMc_0"],conLevel["fieldMc_1"],conLevel["fieldMc_2"],conLevel["fieldMc_3"],conLevel["fieldMc_4"],conLevel["fieldMc_5"],conLevel["fieldMc_6"],conLevel["fieldMc_7"],conLevel["fieldMc_8"]];
         this._flower = [new GreenHousePlantInfo(),new GreenHousePlantInfo(),new GreenHousePlantInfo(),new GreenHousePlantInfo(),new GreenHousePlantInfo(),new GreenHousePlantInfo(),new GreenHousePlantInfo(),new GreenHousePlantInfo(),new GreenHousePlantInfo()];
         GreenHouseController.getInstance().addEventListener(GreenHouseController.PLANT_UPDATE,this.onPlantUpdate);
         GreenHouseController.getInstance().GetPlantInfo(MapManager.currentMap.id);
         GreenHouseController.getInstance().addEventListener(GreenHouseController.PLANTING,this.onPlanting);
         GreenHouseController.getInstance().addEventListener("itemClick",this.onUseSeed);
         GreenHouseController.getInstance().addEventListener(GreenHouseController.ENERGYING,this.onEnergying);
         GreenHouseController.getInstance().addEventListener(GreenHouseController.WATERING,this.onWatering);
         GreenHouseController.getInstance().addEventListener(GreenHouseController.REAPING,this.onReaping);
         GreenHouseController.getInstance().addEventListener(GreenHouseController.REMOVEING,this.onRemoveing);
         GreenHouseController.getInstance().addEventListener(GreenHouseController.RECLAIMING,this.onReclaiming);
         GreenHouseController.getInstance().startTimer();
         HomeToolBarContoller.show(HomeToolBarContoller.PANEL_PLANT,HomeToolBarContoller.PANEL_FRIEND);
         this._timer = new Timer(10000);
         this._timer.start();
         this._timer.addEventListener(TimerEvent.TIMER,this.onTimer);
         this.onTimer(null);
         if(MainManager.actorID == MainManager.actorInfo.mapID)
         {
            if(!BufferRecordManager.getState(MainManager.actorInfo,154))
            {
               this.startGuide();
            }
         }
         LevelManager.mapLevel.addEventListener(MouseEvent.ROLL_OVER,this.addItem);
         LevelManager.mapLevel.addEventListener(MouseEvent.ROLL_OUT,this.removeItem);
         MapManager.addEventListener(MapEvent.MAP_OBJECT_INIT_FINISH,hideObject);
      }
      
      private function removeItem(param1:MouseEvent) : void
      {
         if(this._item)
         {
            DisplayUtil.removeForParent(this._item);
         }
      }
      
      private function addItem(param1:MouseEvent) : void
      {
         if(this._item)
         {
            LevelManager.stage.addChild(this._item);
         }
      }
      
      private function onMachineClick(param1:MouseEvent) : void
      {
         ExchangeOreModel.getData(this.onGetComHandler);
      }
      
      private function onGetComHandler(param1:Object) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ExchangeFertilizerPanel"),"正在打开肥料转化器...",param1);
      }
      
      private function onPlantUpdate(param1:DynamicEvent) : void
      {
         var _loc3_:GreenHousePlantInfo = null;
         var _loc4_:GreenHousePlantInfo = null;
         var _loc2_:Array = param1.paramObject as Array;
         for each(_loc3_ in _loc2_)
         {
            (_loc4_ = this._flower[_loc3_.index]).index = _loc3_.index;
            _loc4_.status = _loc3_.status;
            _loc4_.id = _loc3_.id;
            _loc4_.energy = _loc3_.energy;
            _loc4_.water = _loc3_.water;
            _loc4_.growPercent = _loc3_.growPercent;
            if(_loc4_.status == 1)
            {
               this._fieldMc[_loc4_.index].gotoAndStop(4);
               if(_loc4_.id != 0)
               {
                  this.updatePlant(_loc4_);
               }
            }
            else
            {
               this._field[_loc4_.index].buttonMode = true;
            }
         }
      }
      
      private function updatePlant(param1:GreenHousePlantInfo) : void
      {
         var info:GreenHousePlantInfo = param1;
         if(info.item != null)
         {
            this.updateGrowStutas(info);
            return;
         }
         ResourceManager.getResource(ClientConfig.getFlowerPath(info.id),function(param1:DisplayObject):void
         {
            if(param1)
            {
               info.item = param1 as MovieClip;
               depthLevel.addChild(info.item);
               info.item.name = "flower_" + info.index;
               info.item.x = _field[info.index].x + _field[info.index].width / 2;
               info.item.y = _field[info.index].y + _field[info.index].height / 2;
               updateGrowStutas(info);
               info.item.addEventListener(MouseEvent.MOUSE_OVER,onFlowerOver);
               info.item.addEventListener(MouseEvent.MOUSE_OUT,onFlowerOut);
               info.item.addEventListener(MouseEvent.CLICK,onFlowerClick);
            }
         },"item");
      }
      
      private function updateGrowStutas(param1:GreenHousePlantInfo) : void
      {
         if(param1.growPercent < 40)
         {
            param1.item.gotoAndStop(1);
         }
         else if(param1.growPercent < 80)
         {
            param1.item.gotoAndStop(2);
         }
         else
         {
            param1.item.gotoAndStop(3);
         }
         if(param1.notice)
         {
            DisplayUtil.removeForParent(param1.notice);
            param1.notice = null;
         }
         if(param1.growPercent == 100)
         {
            param1.notice = UIManager.getMovieClip("ui_Home_plant_complete");
         }
         else if(param1.energy == 0 && param1.water == 0)
         {
            param1.notice = UIManager.getMovieClip("ui_Home_all_error");
         }
         else if(param1.energy == 0)
         {
            param1.notice = UIManager.getMovieClip("ui_Home_energy_error");
         }
         else if(param1.water == 0)
         {
            param1.notice = UIManager.getMovieClip("ui_Home_water_error");
         }
         if(param1.notice)
         {
            depthLevel.addChild(param1.notice);
            param1.notice.x = param1.item.x;
            if(param1.growPercent < 40)
            {
               param1.notice.y = param1.item.y - 30;
            }
            else if(param1.growPercent < 80)
            {
               param1.notice.y = param1.item.y - 50;
            }
            else
            {
               param1.notice.y = param1.item.y - 70;
            }
         }
         DepthManager.swapDepthAll(depthLevel);
      }
      
      private function onPlanting(param1:DynamicEvent) : void
      {
         var _loc2_:GreenHousePlantInfo = param1.paramObject as GreenHousePlantInfo;
         var _loc3_:GreenHousePlantInfo = this._flower[_loc2_.index];
         _loc3_.index = _loc2_.index;
         _loc3_.id = _loc2_.id;
         _loc3_.energy = _loc2_.energy;
         _loc3_.water = _loc2_.water;
         _loc3_.growPercent = _loc2_.growPercent;
         this.updatePlant(_loc3_);
      }
      
      private function onEnergying(param1:DynamicEvent) : void
      {
         var _loc2_:GreenHousePlantInfo = param1.paramObject as GreenHousePlantInfo;
         var _loc3_:GreenHousePlantInfo = this._flower[_loc2_.index];
         _loc3_.index = _loc2_.index;
         _loc3_.id = _loc2_.id;
         _loc3_.energy = _loc2_.energy;
         _loc3_.water = _loc2_.water;
         _loc3_.growPercent = _loc2_.growPercent;
         this.updatePlant(_loc3_);
      }
      
      private function onWatering(param1:DynamicEvent) : void
      {
         var _loc2_:GreenHousePlantInfo = param1.paramObject as GreenHousePlantInfo;
         var _loc3_:GreenHousePlantInfo = this._flower[_loc2_.index];
         _loc3_.index = _loc2_.index;
         _loc3_.id = _loc2_.id;
         _loc3_.energy = _loc2_.energy;
         _loc3_.water = _loc2_.water;
         _loc3_.growPercent = _loc2_.growPercent;
         this.updatePlant(_loc3_);
      }
      
      private function onReaping(param1:DynamicEvent) : void
      {
         var _loc2_:uint = param1.paramObject as uint;
         var _loc3_:GreenHousePlantInfo = this._flower[_loc2_];
         _loc3_.item.removeEventListener(MouseEvent.CLICK,this.onFlowerOver);
         _loc3_.item.removeEventListener(MouseEvent.CLICK,this.onFlowerOut);
         _loc3_.item.removeEventListener(MouseEvent.CLICK,this.onFlowerClick);
         if(_loc3_.item)
         {
            DisplayUtil.removeForParent(_loc3_.item);
         }
         if(_loc3_.notice)
         {
            DisplayUtil.removeForParent(_loc3_.notice);
         }
         var _loc4_:GreenHousePlantInfo;
         (_loc4_ = new GreenHousePlantInfo()).index = _loc3_.index;
         _loc4_.status = _loc3_.status;
         _loc3_ = null;
         this._flower[_loc2_] = _loc4_;
      }
      
      private function onRemoveing(param1:DynamicEvent) : void
      {
         var _loc2_:uint = param1.paramObject as uint;
         var _loc3_:GreenHousePlantInfo = this._flower[_loc2_];
         if(_loc3_.item)
         {
            _loc3_.item.removeEventListener(MouseEvent.CLICK,this.onFlowerOver);
            _loc3_.item.removeEventListener(MouseEvent.CLICK,this.onFlowerOut);
            _loc3_.item.removeEventListener(MouseEvent.CLICK,this.onFlowerClick);
            DisplayUtil.removeForParent(_loc3_.item);
         }
         if(_loc3_.notice)
         {
            DisplayUtil.removeForParent(_loc3_.notice);
         }
         var _loc4_:GreenHousePlantInfo;
         (_loc4_ = new GreenHousePlantInfo()).index = _loc3_.index;
         _loc4_.status = _loc3_.status;
         _loc3_ = null;
         this._flower[_loc2_] = _loc4_;
      }
      
      private function onReclaiming(param1:DynamicEvent) : void
      {
         var i:uint = 0;
         var e:DynamicEvent = param1;
         i = e.paramObject as uint;
         var info:GreenHousePlantInfo = this._flower[i];
         info.status = 1;
         this._field[i].buttonMode = false;
         AnimateManager.playMcAnimate(this._fieldMc[i],3,"mc",function():void
         {
            _fieldMc[i].gotoAndStop(4);
         });
      }
      
      private function onMapMouseDown(param1:MapEvent) : void
      {
         if(this._currentAction == this.RECLAIM)
         {
            return;
         }
         if(this._item == null)
         {
            return;
         }
         Mouse.show();
         DisplayUtil.removeForParent(this._item);
         this._item = null;
         this._currentAction = this.RECLAIM;
      }
      
      private function onMouseMove(param1:MouseEvent) : void
      {
         if(this._item)
         {
            if(this._currentAction == this.PLANT || this._currentAction == this.REAP)
            {
               this._item.x = LevelManager.root.mouseX - this._item.width / 2;
               this._item.y = LevelManager.root.mouseY - this._item.height / 2;
            }
            else
            {
               this._item.x = LevelManager.root.mouseX;
               this._item.y = LevelManager.root.mouseY;
            }
         }
         if(GreenHousePlantTip.tip)
         {
            GreenHousePlantTip.tip.x = LevelManager.root.mouseX + 20;
            GreenHousePlantTip.tip.y = LevelManager.root.mouseY;
         }
      }
      
      private function onUseSeed(param1:DynamicEvent) : void
      {
         var e:DynamicEvent = param1;
         this._seedId = e.paramObject as uint;
         ResourceManager.getResource(ItemXMLInfo.getIconURL(this._seedId),function(param1:DisplayObject):void
         {
            if(param1)
            {
               Mouse.hide();
               _currentAction = PLANT;
               if(_item)
               {
                  DisplayUtil.removeForParent(_item);
                  _item = null;
               }
               _item = param1 as MovieClip;
               _item.mouseEnabled = false;
               _item.mouseChildren = false;
               LevelManager.stage.addChild(_item);
               onMouseMove(null);
            }
         },"item");
      }
      
      private function onFieldOver(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         var _loc3_:uint = uint(_loc2_.name.split("_")[1]);
         if(this._flower[_loc3_].status == 0 && this._currentAction == this.RECLAIM)
         {
            this._fieldMc[_loc3_].gotoAndStop(2);
         }
      }
      
      private function onFieldOut(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         var _loc3_:uint = uint(_loc2_.name.split("_")[1]);
         if(this._flower[_loc3_].status == 0 && this._currentAction == this.RECLAIM)
         {
            this._fieldMc[_loc3_].gotoAndStop(1);
         }
      }
      
      private function onFieldClick(param1:MouseEvent) : void
      {
         var f:MovieClip;
         var i:uint = 0;
         var e:MouseEvent = param1;
         if(MapManager.currentMap.id != MainManager.actorID)
         {
            return;
         }
         f = e.currentTarget as MovieClip;
         i = uint(f.name.split("_")[1]);
         if(this._currentAction == this.PLANT)
         {
            if(this._flower[i].id == 0 && this._flower[i].status == 1)
            {
               Mouse.show();
               DisplayUtil.removeForParent(this._item);
               this._item = null;
               this._currentAction = this.RECLAIM;
               GreenHouseController.getInstance().planting(MainManager.actorID,i,this._seedId);
            }
         }
         if(this._currentAction == this.RECLAIM)
         {
            if(this._flower[i].status == 0)
            {
               Alert.show("确定要开垦这块土地吗？",function():void
               {
                  GreenHouseController.getInstance().reclaiming(MainManager.actorID,i);
               });
            }
         }
      }
      
      private function onFlowerOver(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         var _loc3_:uint = uint(_loc2_.name.split("_")[1]);
         _loc2_.filters = [this.filter];
         if(this._flower[_loc3_].growPercent == 100 && MapManager.currentMap.id == MainManager.actorID)
         {
            if(this._currentAction == this.RECLAIM)
            {
               Mouse.hide();
               this.getMouseIcon("ui_Home_reap_mc",this.REAP);
            }
         }
         GreenHousePlantTip.show(this._flower[_loc3_]);
      }
      
      private function onFlowerOut(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         _loc2_.filters = null;
         if(this._currentAction == this.REAP)
         {
            if(this._reaping == false)
            {
               Mouse.show();
               DisplayUtil.removeForParent(this._item);
               this._item = null;
            }
            this._currentAction = this.RECLAIM;
         }
         GreenHousePlantTip.hide();
      }
      
      private function onFlowerClick(param1:MouseEvent) : void
      {
         var f:MovieClip;
         var i:uint = 0;
         var e:MouseEvent = param1;
         if(MapManager.currentMap.id != MainManager.actorID)
         {
            return;
         }
         this.onMouseMove(null);
         f = e.currentTarget as MovieClip;
         i = uint(f.name.split("_")[1]);
         if(this._currentAction == this.ENERGY)
         {
            if(this._flower[i].id != 0)
            {
               AnimateManager.playMcAnimate(this._item,0,"",function():void
               {
                  _item.gotoAndStop(1);
                  GreenHouseController.getInstance().energying(MainManager.actorID,i);
               });
            }
         }
         if(this._currentAction == this.WATER)
         {
            if(this._flower[i].id != 0)
            {
               AnimateManager.playMcAnimate(this._item,0,"",function():void
               {
                  _item.gotoAndStop(1);
                  GreenHouseController.getInstance().watering(MainManager.actorID,i);
               });
            }
         }
         if(this._currentAction == this.REMOVE)
         {
            if(this._flower[i].id != 0)
            {
               AnimateManager.playMcAnimate(this._item,0,"",function():void
               {
                  _item.gotoAndStop(1);
                  Alert.show("确定要铲除这棵作物吗？",function():void
                  {
                     GreenHouseController.getInstance().removeing(MainManager.actorID,i);
                  });
               });
            }
         }
         if(this._currentAction == this.REAP)
         {
            if(this._flower[i].id != 0)
            {
               this._reaping = true;
               AnimateManager.playMcAnimate(this._item,0,"",function():void
               {
                  Mouse.show();
                  DisplayUtil.removeForParent(_item);
                  _item = null;
                  _reaping = false;
                  GreenHouseController.getInstance().reaping(MainManager.actorID,i);
               });
            }
         }
      }
      
      private function initIcon() : void
      {
         this._map = UIManager.getButton("ui_Home_map_btn");
         this._map.x = 20;
         this._map.y = 344;
         this._map.addEventListener(MouseEvent.CLICK,this.onMapClick);
         ToolTipManager.add(this._map,"地图");
         LevelManager.iconLevel.addChild(this._map);
         this._goHome = UIManager.getButton("ui_Home_back_btn");
         this._goHome.x = 84;
         this._goHome.y = 348;
         this._goHome.addEventListener(MouseEvent.CLICK,this.onGoHomeClick);
         ToolTipManager.add(this._goHome,"我要回家");
         LevelManager.iconLevel.addChild(this._goHome);
         this._store = UIManager.getButton("ui_Home_store_btn");
         this._store.x = 84;
         this._store.y = 350;
         this._store.addEventListener(MouseEvent.CLICK,this.onStoreClick);
         ToolTipManager.add(this._store,"太空种子商店");
         LevelManager.iconLevel.addChild(this._store);
         this._seed = UIManager.getButton("ui_Home_seed_btn");
         this._seed.x = 144;
         this._seed.y = 350;
         this._seed.addEventListener(MouseEvent.CLICK,this.onSeedClick);
         ToolTipManager.add(this._seed,"我的太空种子");
         LevelManager.iconLevel.addChild(this._seed);
         this._util = UIManager.getButton("ui_Home_util_btn");
         this._util.x = 204;
         this._util.y = 350;
         this._util.addEventListener(MouseEvent.CLICK,this.onUtilClick);
         ToolTipManager.add(this._util,"工具箱");
         LevelManager.iconLevel.addChild(this._util);
         this._iconBg = UIManager.getMovieClip("ui_Home_icon_bg");
         this._iconBg.x = this._util.x + 18;
         this._iconBg.y = this._util.y - 12;
         this._iconBg.scaleX = this._iconBg.scaleY = 0.85;
         LevelManager.iconLevel.addChild(this._iconBg);
         this._water = UIManager.getButton("ui_Home_water_btn");
         this._water.x = -88;
         this._water.y = -64;
         this._water.addEventListener(MouseEvent.CLICK,this.onWaterClick);
         ToolTipManager.add(this._water,"浇水");
         this._iconBg.addChild(this._water);
         this._energy = UIManager.getButton("ui_Home_energy_btn");
         this._energy.x = -20;
         this._energy.y = -64;
         this._energy.addEventListener(MouseEvent.CLICK,this.onEnergyClick);
         ToolTipManager.add(this._energy,"施肥");
         this._iconBg.addChild(this._energy);
         this._remove = UIManager.getButton("ui_Home_remove_btn");
         this._remove.x = 50;
         this._remove.y = -64;
         this._remove.addEventListener(MouseEvent.CLICK,this.onRemoveClick);
         ToolTipManager.add(this._remove,"铲除");
         this._iconBg.addChild(this._remove);
         if(MapManager.currentMap.id != MainManager.actorID)
         {
            this._store.visible = false;
            this._seed.visible = false;
            this._util.visible = false;
         }
         else
         {
            this._goHome.visible = false;
         }
         this.hideUtils();
      }
      
      private function onMapClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getMapModule("WorldMapPanel"),"正在打开世界地图...");
      }
      
      private function onGoHomeClick(param1:MouseEvent) : void
      {
         MapManager.changeMap(MainManager.actorID);
      }
      
      private function onStoreClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SpaceSeedPanel"),"正在太空种子商店...");
      }
      
      private function onSeedClick(param1:MouseEvent) : void
      {
         HomeToolBarContoller.show(HomeToolBarContoller.PANEL_PLANT,HomeToolBarContoller.PANEL_SEED);
         GreenHouseController.getInstance().dispatchEvent(new Event("gotoNext"));
      }
      
      private function onUtilClick(param1:MouseEvent) : void
      {
         if(this._iconBg.visible)
         {
            this.hideUtils();
         }
         else
         {
            this.showUtils();
         }
         GreenHouseController.getInstance().dispatchEvent(new Event("gotoNext"));
      }
      
      private function onWaterClick(param1:MouseEvent) : void
      {
         this.getMouseIcon("ui_Home_water_mc",this.WATER);
      }
      
      private function onEnergyClick(param1:MouseEvent) : void
      {
         this.getMouseIcon("ui_Home_energy_mc",this.ENERGY);
      }
      
      private function onRemoveClick(param1:MouseEvent) : void
      {
         this.getMouseIcon("ui_Home_remove_mc",this.REMOVE);
      }
      
      private function getMouseIcon(param1:String, param2:String) : void
      {
         this.hideUtils();
         this._currentAction = param2;
         if(this._item)
         {
            DisplayUtil.removeForParent(this._item);
            this._item = null;
         }
         this._item = UIManager.getMovieClip(param1);
         this._item.gotoAndStop(1);
         this._item.mouseEnabled = false;
         this._item.mouseChildren = false;
         LevelManager.stage.addChild(this._item);
         this.onMouseMove(null);
      }
      
      private function showUtils() : void
      {
         this._iconBg.visible = true;
      }
      
      private function hideUtils() : void
      {
         this._iconBg.visible = false;
      }
      
      private function onTimer(param1:TimerEvent) : void
      {
         var _loc2_:DialogBox = new DialogBox();
         _loc2_.show("快去太空种子商店购买种子种植吧！",0,-100,depthLevel["npc"]);
      }
      
      private function startGuide() : void
      {
         var id:uint = 0;
         this.hideToolBar();
         id = setTimeout(function():void
         {
            clearTimeout(id);
            NpcDialog.show(NPC.MAIZHELUN,[MainManager.actorInfo.formatNick + "，欢迎来到这里，我是探险家麦哲伦，这里是博士的最新发明：太空温室，下面我就来给你详细介绍一下吧！"],["好的！","待会再说吧！"],[function():void
            {
               showToolBar();
               RectangleMask.mask(new Rectangle(76,346,60,44),"",2,ClientConfig.getResPath("forApp/GreenHouse.swf"));
               GreenHouseController.getInstance().addEventListener("gotoNext",function(param1:Event):void
               {
                  var e:Event = param1;
                  GreenHouseController.getInstance().removeEventListener("gotoNext",arguments.callee);
                  RectangleMask.mask(new Rectangle(788,86,42,42),"",1,ClientConfig.getResPath("forApp/GreenHouse.swf"));
                  GreenHouseController.getInstance().addEventListener("gotoNext",function(param1:Event):void
                  {
                     var e:Event = param1;
                     GreenHouseController.getInstance().removeEventListener("gotoNext",arguments.callee);
                     RectangleMask.mask(new Rectangle(136,340,58,52),"",3,ClientConfig.getResPath("forApp/GreenHouse.swf"));
                     GreenHouseController.getInstance().addEventListener("gotoNext",function(param1:Event):void
                     {
                        var e:Event = param1;
                        GreenHouseController.getInstance().removeEventListener("gotoNext",arguments.callee);
                        RectangleMask.mask(new Rectangle(906,410,38,38),"",1,ClientConfig.getResPath("forApp/GreenHouse.swf"));
                        GreenHouseController.getInstance().addEventListener("gotoNext",function(param1:Event):void
                        {
                           var e:Event = param1;
                           GreenHouseController.getInstance().removeEventListener("gotoNext",arguments.callee);
                           RectangleMask.mask(new Rectangle(192,338,62,56),"",4,ClientConfig.getResPath("forApp/GreenHouse.swf"));
                           GreenHouseController.getInstance().addEventListener("gotoNext",function(param1:Event):void
                           {
                              var e:Event = param1;
                              GreenHouseController.getInstance().removeEventListener("gotoNext",arguments.callee);
                              RectangleMask.mask(new Rectangle(192,338,62,56),"",1,ClientConfig.getResPath("forApp/GreenHouse.swf"));
                              GreenHouseController.getInstance().addEventListener("gotoNext",function(param1:Event):void
                              {
                                 var e:Event = param1;
                                 GreenHouseController.getInstance().removeEventListener("gotoNext",arguments.callee);
                                 RectangleMask.mask(new Rectangle(742,72,90,108),"",5,ClientConfig.getResPath("forApp/GreenHouse.swf"));
                                 GreenHouseController.getInstance().addEventListener("gotoNext",function(param1:Event):void
                                 {
                                    var e:Event = param1;
                                    GreenHouseController.getInstance().removeEventListener("gotoNext",arguments.callee);
                                    RectangleMask.mask(new Rectangle(714,70,42,42),"",1,ClientConfig.getResPath("forApp/GreenHouse.swf"));
                                    GreenHouseController.getInstance().addEventListener("gotoNext",function(param1:Event):void
                                    {
                                       var e:Event = param1;
                                       GreenHouseController.getInstance().removeEventListener("gotoNext",arguments.callee);
                                       RectangleMask.destroy();
                                       hideToolBar();
                                       NpcDialog.show(NPC.MAIZHELUN,[MainManager.actorInfo.formatNick + "，太空种子会给精灵带来特殊的效果，赶快去尝试一下吧！别忘了，以后我还会带来更加神奇的种子，你可要努力地提高种植等级哦！"],["太棒了，现在就去种植！"],[function():void
                                       {
                                          showToolBar();
                                          BufferRecordManager.setState(MainManager.actorInfo,154,true);
                                       }]);
                                    });
                                 });
                              });
                           });
                        });
                     });
                  });
               });
            },function():void
            {
               showToolBar();
            }]);
         },1000);
      }
      
      private function showToolBar() : void
      {
         this._map.visible = true;
         this._store.visible = true;
         this._seed.visible = true;
         this._util.visible = true;
         HomeToolBarContoller.show(HomeToolBarContoller.PANEL_PLANT,HomeToolBarContoller.PANEL_FRIEND);
      }
      
      private function hideToolBar() : void
      {
         this._map.visible = false;
         this._store.visible = false;
         this._seed.visible = false;
         this._util.visible = false;
         HomeToolBarContoller.hide();
      }
      
      public function gotoFrontRoom() : void
      {
         MapManager.changeMap(MainManager.actorInfo.mapID);
      }
      
      override public function destroy() : void
      {
         var _loc1_:MovieClip = null;
         var _loc2_:GreenHousePlantInfo = null;
         ToolTipManager.remove(conLevel["water"]);
         ToolTipManager.remove(conLevel["energy"]);
         conLevel["energy"].removeEventListener(MouseEvent.CLICK,this.onMachineClick);
         MapManager.removeEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapMouseDown);
         LevelManager.root.removeEventListener(MouseEvent.MOUSE_MOVE,this.onMouseMove);
         LevelManager.iconLevel.removeEventListener(MouseEvent.ROLL_OVER,this.removeItem);
         LevelManager.iconLevel.removeEventListener(MouseEvent.ROLL_OUT,this.addItem);
         for each(_loc1_ in this._field)
         {
            _loc1_.removeEventListener(MouseEvent.MOUSE_OVER,this.onFieldOver);
            _loc1_.removeEventListener(MouseEvent.MOUSE_OUT,this.onFieldOut);
            _loc1_.removeEventListener(MouseEvent.CLICK,this.onFieldClick);
         }
         GreenHouseController.getInstance().removeEventListener(GreenHouseController.PLANT_UPDATE,this.onPlantUpdate);
         GreenHouseController.getInstance().removeEventListener(GreenHouseController.PLANTING,this.onPlanting);
         GreenHouseController.getInstance().removeEventListener("itemClick",this.onUseSeed);
         GreenHouseController.getInstance().removeEventListener(GreenHouseController.ENERGYING,this.onEnergying);
         GreenHouseController.getInstance().removeEventListener(GreenHouseController.WATERING,this.onWatering);
         GreenHouseController.getInstance().removeEventListener(GreenHouseController.REMOVEING,this.onRemoveing);
         GreenHouseController.getInstance().removeEventListener(GreenHouseController.REMOVEING,this.onReclaiming);
         DisplayUtil.removeForParent(this._map);
         this._map.removeEventListener(MouseEvent.CLICK,this.onMapClick);
         ToolTipManager.remove(this._map);
         DisplayUtil.removeForParent(this._store);
         this._store.removeEventListener(MouseEvent.CLICK,this.onStoreClick);
         ToolTipManager.remove(this._store);
         DisplayUtil.removeForParent(this._seed);
         this._seed.removeEventListener(MouseEvent.CLICK,this.onSeedClick);
         ToolTipManager.remove(this._seed);
         DisplayUtil.removeForParent(this._util);
         this._util.removeEventListener(MouseEvent.CLICK,this.onUtilClick);
         ToolTipManager.remove(this._util);
         DisplayUtil.removeForParent(this._iconBg);
         DisplayUtil.removeForParent(this._energy);
         this._energy.removeEventListener(MouseEvent.CLICK,this.onEnergyClick);
         ToolTipManager.remove(this._energy);
         DisplayUtil.removeForParent(this._water);
         this._water.removeEventListener(MouseEvent.CLICK,this.onWaterClick);
         ToolTipManager.remove(this._water);
         DisplayUtil.removeForParent(this._remove);
         this._remove.removeEventListener(MouseEvent.CLICK,this.onRemoveClick);
         ToolTipManager.remove(this._remove);
         DisplayUtil.removeForParent(this._goHome);
         this._goHome.removeEventListener(MouseEvent.CLICK,this.onGoHomeClick);
         ToolTipManager.remove(this._goHome);
         for each(_loc2_ in this._flower)
         {
            if(_loc2_.item)
            {
               _loc2_.item.removeEventListener(MouseEvent.MOUSE_OVER,this.onFlowerOver);
               _loc2_.item.removeEventListener(MouseEvent.MOUSE_OUT,this.onFlowerOut);
               _loc2_.item.removeEventListener(MouseEvent.CLICK,this.onFlowerClick);
            }
         }
         if(this._item)
         {
            DisplayUtil.removeForParent(this._item);
            this._item = null;
         }
         GreenHouseController.getInstance().stopTimer();
         this._timer.reset();
         this._timer.removeEventListener(TimerEvent.TIMER,this.onTimer);
         HomeToolBarContoller.destroy();
      }
   }
}
