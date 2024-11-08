package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.mode.BaseModule;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.utils.DisplayUtil;
   
   public class TrackRareSpiritsCollectionRewardsPanel extends BaseModule
   {
      private var _mainUI:MovieClip;
      
      private var _petArr:Array;
      
      private var _curIndex:int = 0;
      
      private var _curPage:int = 0;
      
      private var _requireArr:Array;
      
      public function TrackRareSpiritsCollectionRewardsPanel()
      {
         this._petArr = [[136,360,376,456,203,812],[1148,1170,620,230,476,833],[469,1450],[830,430,1132,161,158,673,675,722,736,744,461,915,966,1404,205,610,734,1103]];
         this._requireArr = [[2,4,6],[2,4,6],[1,1,2],[2,4,8]];
         super();
         resUrl = "2018/0622/TrackRareSpiritsCollectionRewardsPanel";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         this._mainUI = _ui;
         this.update(this.superShow);
      }
      
      private function superShow() : void
      {
         eventCom.addClickEvent(this._mainUI,this.onClick);
         for(var i:int = 0; i < 4; i++)
         {
         }
         super.show();
      }
      
      private function onGoBtnClick(event:MouseEvent) : void
      {
         var index:int = int(event.currentTarget.name.split("_")[1]);
         switch(index)
         {
            case 0:
               this.hide();
               ModuleManager.showModule(ClientConfig.getAppModule("XXXXXX"),"正在打开....");
         }
      }
      
      private function onClick(event:MouseEvent) : void
      {
         var index:int = int(event.target.name.split("_")[1]);
         var index1:int = int(event.target.parent.name.split("_")[1]);
         switch(event.target.name)
         {
            case "closeBtn":
               this.hide();
               ModuleManager.showAppModule("TrackRareSpiritsGuideMainPanel");
               break;
            case "btn":
               this._curIndex = index1;
               this._curPage = 0;
               this.update();
               break;
            case "preBtn":
               if(this._curPage > 0)
               {
                  --this._curPage;
                  this.update();
               }
               break;
            case "nextBtn":
               if(this._curPage < this._petArr[this._curIndex].length)
               {
                  ++this._curPage;
                  this.update();
               }
               break;
            case "getRewardBtn_" + index:
               sendCmd(43297,[31,index + 1 + this._curIndex * 3],function():void
               {
                  update();
               });
         }
      }
      
      private function update(fun:Function = null) : void
      {
         var maxpage:int;
         var arr:Array;
         var haveNum:int = 0;
         var i:int = 0;
         var petId:int = 0;
         var icon:DisplayObject = null;
         haveNum = 0;
         for(i = 0; i < 4; i++)
         {
            this._mainUI["btnMc_" + i].gotoAndStop(1);
         }
         this._mainUI["btnMc_" + this._curIndex].gotoAndStop(2);
         maxpage = Math.ceil(this._petArr[this._curIndex].length / 12);
         this._mainUI.pageTx.text = String(this._curPage + 1) + "/" + maxpage;
         arr = this._petArr[this._curIndex];
         for(i = 0; i < arr.length; i++)
         {
            if(Boolean(PetManager.hasPet(arr[i])) || int(arr[i]) == 1450 && Boolean(PetManager.hasPet(1451)))
            {
               haveNum++;
            }
         }
         for(i = 0; i < 12; i++)
         {
            if(i < arr.length)
            {
               this._mainUI["mc_" + i].gotoAndStop(1);
               this._mainUI["mc_" + i].nameTx.text = PetXMLInfo.getName(arr[i + this._curPage * 12]);
               petId = int(arr[i + this._curPage * 12]);
               icon = KTool.getIcon(ClientConfig.getPetHeadPath(petId),78,new Point(0,0));
               icon.x = 0;
               icon.y = 0;
               DisplayUtil.removeAllChild(this._mainUI["mc_" + i].icon);
               this._mainUI["mc_" + i].icon.addChild(icon);
               this._mainUI["flag_" + i].visible = PetManager.hasPet(petId) || int(arr[i]) == 1450 && PetManager.hasPet(1451);
               this._mainUI["mc_" + i].visible = true;
            }
            else
            {
               this._mainUI["mc_" + i].gotoAndStop(2);
               this._mainUI["mc_" + i].visible = false;
               this._mainUI["flag_" + i].visible = false;
            }
         }
         CommonUI.setEnabled(this._mainUI.preBtn,true,false);
         CommonUI.setEnabled(this._mainUI.nextBtn,true,false);
         if(this._curPage == 0)
         {
            CommonUI.setEnabled(this._mainUI.preBtn,false,true);
         }
         if(this._curPage == maxpage - 1)
         {
            CommonUI.setEnabled(this._mainUI.nextBtn,false,true);
         }
         KTool.getMultiValue([104397],function(va:Array):void
         {
            for(var i:int = 0; i < 3; i++)
            {
               _mainUI["numTx_" + i].text = String(_requireArr[_curIndex][i]);
               _mainUI["haveNumTx_" + i].text = String(haveNum);
               if(haveNum >= _requireArr[_curIndex][i])
               {
                  CommonUI.setEnabled(_mainUI["getRewardBtn_" + i],true,false);
               }
               else
               {
                  CommonUI.setEnabled(_mainUI["getRewardBtn_" + i],false,true);
               }
               if(BitUtils.getBit(va[0],i + _curIndex * 3) > 0)
               {
                  _mainUI["flagMc_" + i].visible = true;
                  CommonUI.setEnabled(_mainUI["getRewardBtn_" + i],false,true);
               }
               else
               {
                  _mainUI["flagMc_" + i].visible = false;
               }
            }
         });
         if(fun != null)
         {
            fun();
         }
      }
      
      override public function hide() : void
      {
         super.hide();
      }
   }
}

