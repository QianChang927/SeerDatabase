package com.robot.app.mapProcess
{
   import com.robot.app.control.NewGreenHouse2021Controller;
   import com.robot.app.greenHouse.GreenHouse2021PlantInfo;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.ds.HashMap;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class NewGreenHouseMap2021 extends BaseMapProcess
   {
       
      
      private var _flower:Array;
      
      private var _tipsIoArr:Array;
      
      private var _listenerMap:HashMap;
      
      private var _commdId:int = 41285;
      
      private var _startTime:int = 0;
      
      public var _map:MapModel;
      
      private var _surplusTimeArr:Array;
      
      public function NewGreenHouseMap2021()
      {
         this._flower = new Array();
         this._surplusTimeArr = [];
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         this._map = MapManager.currentMap;
         this._map.controlLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this.gotoFrontRoom();
         Alarm2.show("太空温室正在升级中，敬请期待！");
      }
      
      private function onMouseClick(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "infoBtn":
               ModuleManager.showAppModule("BaseRoomInfoPanel");
               break;
            case "shopBtn":
               ModuleManager.showAppModule("BaseRoomShopPanel");
               break;
            case "roomBtn":
               this.gotoFrontRoom();
         }
      }
      
      private function onlandClick(param1:MouseEvent) : void
      {
         var _loc2_:int = KTool.getIndex(param1.currentTarget.parent);
         ModuleManager.showAppModule("BaseRoomGreenhousePanel",{
            "type":1,
            "pantindex":_loc2_ + 1
         });
      }
      
      private function onPantClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var e:MouseEvent = param1;
         index = KTool.getIndex(e.currentTarget.parent);
         var info:GreenHouse2021PlantInfo = this._flower[index] as GreenHouse2021PlantInfo;
         if(info.surplusTime <= 0)
         {
            Alert.show("已经成熟，是否采摘？",function():void
            {
               NewGreenHouse2021Controller.onPickPlant(index + 1);
            });
         }
         else
         {
            ModuleManager.showAppModule("BaseRoomGreenhousePanel",{
               "type":2,
               "pantindex":index + 1
            });
         }
      }
      
      private function addEvent() : void
      {
         EventManager.addEventListener(NewGreenHouse2021Controller.getInstance().PLANT_INFO_CHANGED,this.update);
      }
      
      private function update(param1:DynamicEvent) : void
      {
         var e:DynamicEvent = param1;
         NewGreenHouse2021Controller.getInstance().updateUserInfo().then(function():void
         {
            showPlants();
         });
      }
      
      public function showPlants() : void
      {
         this.showPlantInfo();
      }
      
      private function showPlantInfo() : void
      {
         NewGreenHouse2021Controller.getInstance().getPlantsInfo().then(function(param1:Array):void
         {
            var _loc5_:GreenHouse2021PlantInfo = null;
            var _loc6_:* = false;
            _surplusTimeArr = [];
            var _loc2_:int = 0;
            while(_loc2_ < 6)
            {
               if(!(_loc6_ = (_loc5_ = param1[_loc2_] as GreenHouse2021PlantInfo).id != 0))
               {
                  depthLevel["land_" + _loc2_]["plantMc"].visible = false;
               }
               else
               {
                  depthLevel["land_" + _loc2_]["plantMc"].visible = true;
               }
               if(_loc5_ != null)
               {
                  _flower[_loc2_] = _loc5_;
                  _surplusTimeArr[_loc2_] = _loc5_.surplusTime;
               }
               _loc2_++;
            }
            udpateInfo();
            var _loc3_:Boolean = false;
            var _loc4_:int = 0;
            while(_loc4_ < 6)
            {
               if(_surplusTimeArr[_loc4_] > 0)
               {
                  _loc3_ = true;
               }
               _loc4_++;
            }
            if(_loc3_)
            {
               SystemTimerManager.addTickFun(ontimerHandle);
            }
            else
            {
               SystemTimerManager.removeTickFun(ontimerHandle);
            }
         });
      }
      
      private function ontimerHandle() : void
      {
         var _loc4_:GreenHouse2021PlantInfo = null;
         var _loc1_:Boolean = false;
         var _loc2_:Boolean = false;
         var _loc3_:int = 0;
         while(_loc3_ < this._flower.length)
         {
            --this._surplusTimeArr[_loc3_];
            if((Boolean(_loc4_ = this._flower[_loc3_] as GreenHouse2021PlantInfo)) && _loc4_.id != 0)
            {
               _loc4_.surplusTime = this._surplusTimeArr[_loc3_];
               if(_loc4_.surplusTime == _loc4_.matureTime - _loc4_.changeTime)
               {
                  _loc2_ = true;
               }
            }
            if(this._surplusTimeArr[_loc3_] > 0)
            {
               _loc1_ = true;
            }
            _loc3_++;
         }
         if(!_loc1_ || _loc2_)
         {
            this.showPlantInfo();
         }
      }
      
      private function udpateInfo() : void
      {
         var _loc2_:GreenHouse2021PlantInfo = null;
         var _loc1_:int = 0;
         while(_loc1_ < this._flower.length)
         {
            _loc2_ = this._flower[_loc1_] as GreenHouse2021PlantInfo;
            if(Boolean(_loc2_) && _loc2_.id != 0)
            {
               CommonUI.setEnabled(this._map.depthLevel["land_" + _loc1_]["landMc"],false,false);
               this._map.depthLevel["land_" + _loc1_]["plantMc"].visible = true;
               this._map.depthLevel["land_" + _loc1_]["plantMc"]["showhandMc"].visible = false;
               if(_loc2_.growPercent == 0)
               {
                  this.landPlantMc(_loc2_.id,1,this._map.depthLevel["land_" + _loc1_]["plantMc"]["mc"]);
               }
               else if(_loc2_.growPercent == 1)
               {
                  this.landPlantMc(_loc2_.id,2,this._map.depthLevel["land_" + _loc1_]["plantMc"]["mc"]);
               }
               else if(_loc2_.growPercent == 2)
               {
                  this.landPlantMc(_loc2_.id,3,this._map.depthLevel["land_" + _loc1_]["plantMc"]["mc"]);
                  this._map.depthLevel["land_" + _loc1_]["plantMc"]["showhandMc"].visible = true;
               }
            }
            else
            {
               this._map.depthLevel["land_" + _loc1_]["plantMc"].visible = false;
               CommonUI.setEnabled(this._map.depthLevel["land_" + _loc1_]["landMc"],true,false);
            }
            _loc1_++;
         }
      }
      
      private function landPlantMc(param1:int, param2:int, param3:MovieClip) : void
      {
         var url:String;
         var widthArr:Array;
         var id:int = param1;
         var lv:int = param2;
         var iconContainer:MovieClip = param3;
         DisplayUtil.removeAllChild(iconContainer);
         url = String(ClientConfig.getResPath("item/seed/" + id + "_" + lv + ".swf"));
         widthArr = [45,93,106];
         ResourceManager.getResource(url,function(param1:DisplayObject):void
         {
            if(param1)
            {
               iconContainer.addChild(param1);
            }
            else
            {
               Alarm2.show("缺少植株素材！Id：" + id);
            }
         },"item",3,false);
      }
      
      private function getItemIcon(param1:uint, param2:MovieClip) : void
      {
         var _url:String = null;
         var iconID:uint = param1;
         var iconContainer:MovieClip = param2;
         DisplayUtil.removeAllChild(iconContainer);
         if(iconID < 10000)
         {
            _url = String(ClientConfig.getResPath("item/cloth/suitIcon/" + iconID + ".swf"));
         }
         else if(iconID < 100000)
         {
            _url = String(ClientConfig.getResPath("countermark/icon/" + iconID + ".swf"));
         }
         else
         {
            _url = String(ItemXMLInfo.getIconURL(iconID));
         }
         ResourceManager.getResource(_url,function(param1:DisplayObject):void
         {
            CommonUI.equalScale(param1,125,125);
            CommonUI.centerAlign(param1,new Sprite(),new Point(0,0));
            iconContainer.addChild(param1);
         },"item");
      }
      
      public function gotoFrontRoom() : void
      {
         MapManager.changeMap(MainManager.actorInfo.mapID);
      }
      
      override public function destroy() : void
      {
         EventManager.removeEventListener(NewGreenHouse2021Controller.getInstance().PLANT_INFO_CHANGED,this.update);
         NewGreenHouse2021Controller.getInstance().destory();
         SystemTimerManager.removeTickFun(this.ontimerHandle);
         KTool.showMapAllPlayerAndMonster(true);
         ToolBarController.showOrHideAllUser(true);
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.show();
         MapNamePanel.show();
         MainManager.selfVisible = true;
         super.destroy();
      }
   }
}
