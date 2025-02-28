package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NpcDialogNew_1;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class MapProcess_11469 extends BaseMapProcess
   {
       
      
      private var _indexArr:Array;
      
      private var _Len1:int;
      
      private var _Len2:int;
      
      private var _itemNum:int;
      
      private var _num:int;
      
      public function MapProcess_11469()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         this._indexArr = new Array();
         var _loc1_:int = 0;
         while(_loc1_ < 4)
         {
            this.conLevel["smallLightMc_" + _loc1_].addEventListener(MouseEvent.CLICK,this.onSmallLightBtnClick);
            _loc1_++;
         }
         var _loc2_:int = 0;
         while(_loc2_ < 5)
         {
            this.conLevel["bossBtn_" + _loc2_].addEventListener(MouseEvent.CLICK,this.onBossBtnBtnClick);
            _loc2_++;
         }
         this.conLevel.addEventListener(MouseEvent.CLICK,this.onClick);
         this.update();
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         switch(evt.target.name)
         {
            case "getRewardBtn":
               KTool.doExchange(9917,function():void
               {
                  update();
                  ModuleManager.showModule(ClientConfig.getAppModule("GreatLanternFestivalNoticeMainPanel"),"正在打开....");
               });
         }
      }
      
      protected function onSmallLightBtnClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var exchangeIdArr:Array = null;
         var event:MouseEvent = param1;
         index = int(event.currentTarget.name.split("_")[1]);
         switch(event.target.name)
         {
            case "btn":
               if(this._itemNum > 0)
               {
                  exchangeIdArr = [9916,9925,9926,9927];
                  KTool.doExchange(exchangeIdArr[index],function():void
                  {
                     CommonUI.setEnabled(MapManager.currentMap.controlLevel as MovieClip,false,false);
                     AnimateManager.playMcAnimate(MapManager.currentMap.controlLevel["smallLightMc_" + index],3,"mc3",function():void
                     {
                        KTool.getMultiValue([101105],function(param1:Array):void
                        {
                           var va:Array = param1;
                           var num:int = 0;
                           var i:int = 0;
                           while(i < 4)
                           {
                              if(BitUtils.getBit(va[0],i) > 0)
                              {
                                 num++;
                              }
                              i++;
                           }
                           if(num >= 4)
                           {
                              MapManager.currentMap.controlLevel["jinduMc"]["jinduTx"].text = String(100) + "%";
                              AnimateManager.playMcAnimate(MapManager.currentMap.controlLevel as MovieClip,1,"bigLightMc",function():void
                              {
                                 CommonUI.setEnabled(MapManager.currentMap.controlLevel as MovieClip,true,false);
                                 update();
                              });
                           }
                           else
                           {
                              update();
                              CommonUI.setEnabled(MapManager.currentMap.controlLevel as MovieClip,true,false);
                           }
                        });
                     });
                  });
               }
               else
               {
                  Alarm2.show("每次激活主灯进度需要消耗一个灯芯火焰！当前尚未获得灯芯火焰!");
               }
         }
      }
      
      protected function onBossBtnBtnClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         FightManager.fightNoMapBoss("斯嘟尔",9068,false,true,function():void
         {
            ItemManager.updateItems([1712340],function():void
            {
               var _loc1_:Array = new Array();
               _loc1_[0] = ItemManager.getNumByID(1712340);
               if(_loc1_[0] <= _itemNum)
               {
                  Alarm2.show("很遗憾，你并没有发现什么有用的东西。");
               }
            });
         });
      }
      
      private function update() : void
      {
         ItemManager.updateItems([1712340],function():void
         {
            var _loc1_:Array = new Array();
            _loc1_[0] = ItemManager.getNumByID(1712340);
            _itemNum = _loc1_[0];
         });
         KTool.getMultiValue([101105],function(param1:Array):void
         {
            _num = 0;
            var _loc2_:int = 0;
            while(_loc2_ < 4)
            {
               if(BitUtils.getBit(param1[0],_loc2_) > 0)
               {
                  ++_num;
                  MapManager.currentMap.controlLevel["smallLightMc_" + _loc2_].gotoAndStop(2);
               }
               else
               {
                  MapManager.currentMap.controlLevel["smallLightMc_" + _loc2_].gotoAndStop(1);
               }
               _loc2_++;
            }
            var _loc3_:Array = [0,25,50,75,100];
            MapManager.currentMap.controlLevel["jinduMc"]["jinduTx"].text = String(_loc3_[_num]) + "%";
            if(_num >= 4)
            {
               MapManager.currentMap.controlLevel["bigLightMc"].gotoAndStop(322);
            }
         });
         KTool.getBitSet([339],function(param1:Array):void
         {
            if(param1[0] > 0)
            {
               MapManager.currentMap.controlLevel["bigLightMc"].gotoAndStop(1);
            }
            MapManager.currentMap.controlLevel["jinduMc"].visible = Boolean(!param1[0]);
         });
      }
      
      override public function destroy() : void
      {
         NpcDialogNew_1._HasDanmu = true;
         var _loc1_:int = 0;
         while(_loc1_ < 4)
         {
            if(MapManager.currentMap.controlLevel["smallLightMc_" + _loc1_] != null)
            {
               MapManager.currentMap.controlLevel["smallLightMc_" + _loc1_].removeEventListener(MouseEvent.CLICK,this.onSmallLightBtnClick);
            }
            _loc1_++;
         }
         var _loc2_:int = 0;
         while(_loc2_ < 5)
         {
            if(MapManager.currentMap.controlLevel["bossBtn_" + _loc2_] != null)
            {
               MapManager.currentMap.controlLevel["bossBtn_" + _loc2_].removeEventListener(MouseEvent.CLICK,this.onBossBtnBtnClick);
            }
            _loc2_++;
         }
         this.conLevel.removeEventListener(MouseEvent.CLICK,this.onClick);
         super.destroy();
      }
   }
}
