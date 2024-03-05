package com.robot.app2.share
{
   import com.adobe.images.JPGEncoder;
   import com.robot.app2.share.data.PlatformType;
   import com.robot.app2.share.data.ShareData;
   import com.robot.app2.share.platform.PlatForm;
   import com.robot.app2.share.platform.Qq;
   import com.robot.app2.share.platform.Qzone;
   import com.robot.app2.share.platform.Sina;
   import com.robot.app2.share.platform.Tqq;
   import com.robot.core.CommandID;
   import com.robot.core.info.GetImgAddrInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.Bitmap;
   import flash.display.BitmapData;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.IEventDispatcher;
   import flash.geom.Matrix;
   import flash.geom.Rectangle;
   import flash.net.URLLoader;
   import flash.net.URLLoaderDataFormat;
   import flash.net.URLRequest;
   import flash.net.URLRequestHeader;
   import flash.net.URLRequestMethod;
   import flash.net.navigateToURL;
   import flash.system.Security;
   import flash.utils.ByteArray;
   import flash.utils.Dictionary;
   import org.taomee.events.SocketEvent;
   
   public class ShareController
   {
      
      private static var platformDic:Dictionary;
      
      private static var _bgW:Number;
      
      private static var _bgH:Number;
      
      private static var _bgX:Number;
      
      private static var _bgY:Number;
      
      private static var _bg:Sprite;
      
      private static var _func:Function;
       
      
      public function ShareController()
      {
         super();
      }
      
      private static function getUrl(param1:String) : String
      {
         return (platformDic[param1] as PlatForm).url;
      }
      
      public static function share(param1:ShareData) : void
      {
         var _loc2_:String = param1.shareType;
         var _loc3_:PlatForm = getPlatForm(_loc2_);
         if(_loc3_)
         {
            _loc3_.data = param1;
            platformDic[_loc2_] = _loc3_;
            var _loc4_:String = getUrl(_loc2_);
            navigateToURL(new URLRequest(_loc4_));
            return;
         }
         throw new Error("error:没有这个分享平台！");
      }
      
      private static function getPlatForm(param1:String) : PlatForm
      {
         if(!platformDic)
         {
            platformDic = new Dictionary();
         }
         if(!platformDic[param1])
         {
            switch(param1)
            {
               case PlatformType.QQ:
                  return new Qq();
               case PlatformType.QZONE:
                  return new Qzone();
               case PlatformType.SINA:
                  return new Sina();
               case PlatformType.TQQ:
                  return new Tqq();
               default:
                  return null;
            }
         }
         else
         {
            return platformDic[param1];
         }
      }
      
      public static function cutImg(param1:Number, param2:Number, param3:Number, param4:Number, param5:Function = null) : void
      {
         _bg = new Sprite();
         _bgX = param1;
         _bgY = param2;
         _bgW = param3;
         _bgH = param4;
         _func = param5;
         _bg.graphics.drawRect(_bgX,_bgY,_bgW,_bgH);
         SocketConnection.sendWithCallback(CommandID.GET_IMAGE_ADDRES,onGetImgAddr);
      }
      
      private static function onGetImgAddr(param1:SocketEvent) : void
      {
         var _loc2_:GetImgAddrInfo = param1.data as GetImgAddrInfo;
         var _loc3_:BitmapData = new BitmapData(Math.abs(_bgW),Math.abs(_bgH));
         var _loc4_:Rectangle = _bg.getRect(MainManager.getStage());
         var _loc5_:Matrix;
         (_loc5_ = new Matrix()).translate(-_loc4_.x,-_loc4_.y);
         _loc3_.draw(getBmpLevel(),_loc5_);
         var _loc6_:ByteArray;
         (_loc6_ = new JPGEncoder().encode(_loc3_)).position = 0;
         upload(_loc6_,_loc2_);
      }
      
      private static function getBmpLevel() : Sprite
      {
         var _loc1_:Sprite = new Sprite();
         var _loc2_:BitmapData = new BitmapData(MainManager.getStageWidth(),MainManager.getStageHeight());
         _loc2_.draw(MainManager.getStage());
         var _loc3_:Bitmap = new Bitmap(_loc2_);
         _loc1_.addChild(_loc3_);
         return _loc1_;
      }
      
      private static function upload(param1:ByteArray, param2:GetImgAddrInfo) : void
      {
         var loader:URLLoader;
         var byte:ByteArray;
         var header:URLRequestHeader;
         var request:URLRequest;
         var cutMapInfo:ByteArray = param1;
         var data:GetImgAddrInfo = param2;
         Security.loadPolicyFile("http://" + data.ip + ":" + String(data.port) + "/crossdomain.xml");
         loader = new URLLoader();
         loader.dataFormat = URLLoaderDataFormat.BINARY;
         byte = new ByteArray();
         byte.writeBytes(data.session);
         byte.writeBytes(cutMapInfo);
         configureListeners(loader);
         header = new URLRequestHeader("user-ID",String(MainManager.actorID));
         request = new URLRequest("http://" + data.ip + ":" + String(data.port) + "/cgi-bin/processor/screenshot_upload_processor.php");
         request.data = byte;
         request.method = URLRequestMethod.POST;
         request.contentType = "text/plain";
         request.requestHeaders.push(header);
         try
         {
            loader.load(request);
         }
         catch(error:Error)
         {
         }
      }
      
      private static function configureListeners(param1:IEventDispatcher) : void
      {
         param1.addEventListener(Event.COMPLETE,completeHandler);
      }
      
      private static function completeHandler(param1:Event) : void
      {
         var _loc2_:URLLoader = URLLoader(param1.target);
         var _loc3_:String = "http://" + _loc2_.data;
         if(_func != null)
         {
            _func(_loc3_);
         }
      }
   }
}
