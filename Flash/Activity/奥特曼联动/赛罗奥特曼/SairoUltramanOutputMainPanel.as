package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.app2.systems.PetSkinController;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   
   public class SairoUltramanOutputMainPanel extends ActivityModel
   {
      private var _commdId:int;
      
      private var _itemNum:int;
      
      private var _requireItemArray:Array;
      
      private var isInRebateTime:Boolean;
      
      private var _petId:int;
      
      private var _skinId:int;
      
      private var _curLv:int = 1;
      
      private var _isOpenFightView:Boolean;
      
      private var _fightView:SairoUltramanOutputFightView;
      
      private var _shopView:SairoUltramanOutputShopView;
      
      private var _isHaveRewardPet:Boolean;
      
      public function SairoUltramanOutputMainPanel()
      {
         super();
         resUrl = "2024/1018/SairoUltramanOutputMainPanel";
         configUrl = "2024/1018/sairoUltramanOutputConfig";
      }
      
      override public function init(data:Object = null) : void
      {
         this._isOpenFightView = data as Boolean;
      }
      
      override public function show() : void
      {
         var i:int;
         StatManager.sendStat2014("1018赛罗奥特曼输出","进入活动主面板","2024运营活动");
         super.show();
         for(i = 0; i < 2; i++)
         {
            _mainUI["tipsMc_" + i].visible = false;
         }
         this._shopView = new SairoUltramanOutputShopView(_mainUI["tipsMc_" + 0],refresh);
         this._fightView = new SairoUltramanOutputFightView(_mainUI["tipsMc_" + 1],refresh);
         if(this._isOpenFightView)
         {
            KTool.getMultiValue([203157],function(va:Array):void
            {
               if(KTool.subByte(va[0],0,8) > 10)
               {
                  Alarm2.show("恭喜你，已帮助赛罗奥特曼完成今日试炼！",function():void
                  {
                  });
               }
               else
               {
                  _fightView.show();
               }
            });
         }
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btnName:String = e.target.name;
         var index:int = int(KTool.getIndex(e.target));
         switch(btnName)
         {
            case "closeBtn":
               this.hide();
               ModuleManager.showAppModule("UltramanSeriesGoToMapPanel");
               break;
            case "petInfoBtn":
               KTool.showPetInfoPanel(this._petId);
               break;
            case "rebateBtn_0":
               if(PetSkinController.instance.haveSkin(this._skinId))
               {
                  sendCmd(this._commdId,[89,5],function():void
                  {
                     refresh().then(function():void
                     {
                        _shopView.update();
                     });
                  });
               }
               else
               {
                  Alert.show("很抱歉，你暂未获得皮肤“终极赛罗”，是否前往获取？",function():void
                  {
                     hide();
                     ModuleManager.showAppModule("AotemanSkinPanel");
                  });
               }
               break;
            case "rebateBtn_1":
               if(this._isHaveRewardPet)
               {
                  sendCmd(this._commdId,[89,6],function():void
                  {
                     refresh().then(function():void
                     {
                        _shopView.update();
                     });
                  });
               }
               else
               {
                  Alert.show("很抱歉，你暂未获得精灵“贝利亚奥特曼”，是否前往获取？",function():void
                  {
                     hide();
                     ModuleManager.showAppModule("AoTeMan_BeiLiYaMainPanel");
                  });
               }
               break;
            case "fightBtn":
               if(this._curLv > 10)
               {
                  Alarm2.show("今日已帮助赛罗奥特曼完成试炼，请明日再来！");
                  return;
               }
               _mainUI["tipsMc_" + 1].visible = true;
               break;
            case "shopBtn":
               _mainUI["tipsMc_" + 0].visible = true;
               break;
            case "aKeyBuyBtn":
               KTool.buyProductByCallback(261013,1,function():void
               {
                  sendCmd(_commdId,[89,4],function():void
                  {
                     refresh().then(function():void
                     {
                        _shopView.update();
                     });
                  });
               },_mainUI);
         }
      }
      
      override protected function updatePanel() : void
      {
         var daily_203157:int;
         var daily_203158:int;
         var daily_203159:int;
         var forever_124289:int = 0;
         this._commdId = getValue("comId")[0];
         this._petId = getValue("petId");
         this._skinId = getValue("skinId");
         forever_124289 = int(getValue("forever_124289"));
         daily_203157 = int(getValue("daily_203157"));
         daily_203158 = int(getValue("daily_203158"));
         daily_203159 = int(getValue("daily_203159"));
         this.isInRebateTime = SystemTimerManager.getIsInActivity("20241025","*");
         _mainUI.itemNumTx.text = getValue("itemNum");
         this._curLv = KTool.subByte(daily_203157,0,8);
         _mainUI.flagMc.visible = false;
         KTool.checkMultiPetClass([this._petId,4680],function(va:Array):void
         {
            if(va[0] > 0 || BitUtils.getBit(forever_124289,0) > 0)
            {
               CommonUI.setEnabled(_mainUI.aKeyBuyBtn,false,true);
               _mainUI.flagMc.visible = true;
            }
            else
            {
               CommonUI.setEnabled(_mainUI.aKeyBuyBtn,true,false);
            }
            _isHaveRewardPet = va[1] > 0;
            var isHaveSKin:Boolean = Boolean(PetSkinController.instance.haveSkin(_skinId));
            var haveArr:Array = [];
            haveArr.push(isHaveSKin);
            haveArr.push(_isHaveRewardPet);
            for(var i:int = 0; i < 2; i++)
            {
               if(BitUtils.getBit(forever_124289,i + 1) > 0)
               {
                  _mainUI["flag_" + i].visible = true;
                  CommonUI.setEnabled(_mainUI["btnRebateMc_" + i],false,true);
                  _mainUI["btnRebateMc_" + i].gotoAndStop(2);
               }
               else
               {
                  _mainUI["flag_" + i].visible = false;
                  CommonUI.setEnabled(_mainUI["btnRebateMc_" + i],true,false);
                  if(Boolean(haveArr[i]))
                  {
                     _mainUI["btnRebateMc_" + i].gotoAndStop(2);
                  }
                  else
                  {
                     _mainUI["btnRebateMc_" + i].gotoAndStop(1);
                  }
               }
            }
         });
      }
      
      override public function hide() : void
      {
         super.hide();
      }
   }
}

